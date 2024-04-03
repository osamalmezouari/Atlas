import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Adoption } from "./entities/adoption.entity";
import { Repository } from "typeorm";
import { CreateAdoptionDto } from "./dto/create-adoption.dto";
import { Image } from "./entities/images.entity";
import { UpdateAdoptionDto } from "./dto/update-adoption.dto";
import { UsersService } from "../users/users.service";

@Injectable()
export class AdoptionService {
  constructor(
    @InjectRepository(Adoption)
    private readonly adoptionRepository: Repository<Adoption>,
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
    private readonly usersService: UsersService,
  ) {}

  async findAll(): Promise<Adoption[]> {
    return this.adoptionRepository.find({
      where: { adopted: false },
      relations: {
        image: true,
      },
    });
  }
  async FindWithClassAndLocation(
    classParam: string,
    locationParam: string,
  ): Promise<Adoption[]> {
    if (classParam === "all" && locationParam === "all") {
      const result = await this.findAll();
      return result;
    }
    if (locationParam === "all") {
      const result = await this.adoptionRepository.find({
        where: { animal_class: classParam, adopted: false },
        relations: {
          image: true,
        },
      });
      return result;
    }
    if (classParam === "all") {
      const result = await this.adoptionRepository.find({
        where: { location: locationParam, adopted: false },
        relations: {
          image: true,
        },
      });
      return result;
    }

    const result = await this.adoptionRepository.find({
      where: {
        animal_class: classParam,
        location: locationParam,
        adopted: false,
      },
      relations: {
        image: true,
      },
    });
    return result;
  }

  async findAllLocations(): Promise<string[]> {
    const adoptions = await this.adoptionRepository.find({
      select: ["location"],
    });
    const locations = await Promise.all(
      adoptions.map((adoption) => adoption.location),
    );
    return locations;
  }

  async findOne(id: string): Promise<Adoption> {
    const Adoption = await this.adoptionRepository.findOne({
      where: { id },
      relations: {
        user: true,
        image: true,
      },
    });
    if (!Adoption) {
      throw new NotFoundException(
        ` Adoption with id = ${id} ${HttpStatus.NOT_FOUND} `,
      );
    }
    return Adoption;
  }

  async create(createAdoptionDto: CreateAdoptionDto) {
    const { user } = createAdoptionDto;
    const assocuser = await this.usersService.findOne(user);
    const image = await Promise.all(
      createAdoptionDto.image.map((Cloudurl) => this.preloadImage(Cloudurl)),
    );
    this.adoptionRepository.create({
      ...createAdoptionDto,
      user: assocuser,
      posted_date: new Date().getTime(),
      image,
    });
    return this.adoptionRepository.save({
      ...createAdoptionDto,
      image,
      user: assocuser,
      posted_date: new Date().getTime(),
    });
  }

  async update(id: string, updatedAdoption: UpdateAdoptionDto) {
    const { user } = updatedAdoption;
    const assocuser = await this.usersService.findOne(user);
    const image =
      updatedAdoption.image &&
      (await Promise.all(
        updatedAdoption.image.map((Cloudurl) => this.preloadImage(Cloudurl)),
      ));
    const updatedadoption = await this.adoptionRepository.preload({
      id: id,
      ...updatedAdoption,
      image,
      user: assocuser,
    });
    if (!updatedadoption) {
      throw new Error(
        `the adoption with the id ${id} you try to updated  ${HttpStatus.NOT_FOUND}`,
      );
    }
    return this.adoptionRepository.save({
      id: id,
      ...updatedAdoption,
      image,
      user: assocuser,
    });
  }

  async delete(id: string) {
    const adoption = await this.findOne(id);
    if (!adoption) {
      throw new Error("Adoption not found");
    }
    await this.imageRepository.delete({ adoption });
    return await this.adoptionRepository.remove(adoption);
  }

  async preloadImage(Cloudurl) {
    const Image = await this.imageRepository.findOne({ where: { Cloudurl } });
    if (Image) {
      return Image;
    }
    return this.imageRepository.create({ Cloudurl });
  }

  async AdoptionNewStatistics() {
    const query = `
    SELECT posted_date , adopted
    FROM adoption
    WHERE posted_date BETWEEN UNIX_TIMESTAMP(DATE_SUB(NOW(), INTERVAL 7 DAY)) * 1000 
    AND UNIX_TIMESTAMP(NOW()) * 1000
    AND adopted = 0`;

    const rows = await this.adoptionRepository.query(query);
    const createdDates = rows.map((row) => row.posted_date);
    return createdDates;
  }
  async AdoptionAdoptedStatistics() {
    const query = `
    SELECT posted_date , adopted
    FROM adoption
    WHERE posted_date BETWEEN UNIX_TIMESTAMP(DATE_SUB(NOW(), INTERVAL 7 DAY)) * 1000 
    AND UNIX_TIMESTAMP(NOW()) * 1000
    AND adopted = 1`;

    const rows = await this.adoptionRepository.query(query);
    const createdDates = rows.map((row) => row.posted_date);
    return createdDates;
  }
}
