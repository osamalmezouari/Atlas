import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Adoption } from "./entities/adoption.entity";
import { Repository } from "typeorm";
import { CreateAdoptionDto } from "./dto/create-adoption.dto";
import { Image } from "./entities/images.entity";
import { UpdateAdoptionDto } from "./dto/update-adoption.dto";
import * as http from "http";

@Injectable()
export class AdoptionService {
  constructor(
    @InjectRepository(Adoption)
    private readonly adoptionRepository: Repository<Adoption>,
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {}

  findAll(): Promise<Adoption[]> {
    return this.adoptionRepository.find({
      relations: {
        image: true,
      },
    });
  }

  async findOne(id: String) {
    const Adoption = await this.adoptionRepository.findOne({ where: { id } });
    if (!Adoption) {
      throw new NotFoundException(
        ` Adoption with id = ${id} ${HttpStatus.NOT_FOUND} `,
      );
    }
    return Adoption;
  }

  async create(createAdoptionDto: CreateAdoptionDto) {
    const image = await Promise.all(
      createAdoptionDto.image.map((Cloudurl) => this.preloadImage(Cloudurl)),
    );
    const obj = {
      ...createAdoptionDto,
      image,
    };

    console.log(obj);
    this.adoptionRepository.create({
      ...createAdoptionDto,
      image,
    });
    return this.adoptionRepository.save({
      ...createAdoptionDto,
      image,
    });
  }

  async update(id: String, updatedAdoption: UpdateAdoptionDto) {
    const image = await Promise.all(
      updatedAdoption.image.map((Cloudurl) => this.preloadImage(Cloudurl)),
    );
    const updatedadoption = await this.adoptionRepository.preload({
      id: id,
      ...updatedAdoption,
      image,
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
    });
  }

  async delete(id: String) {
    const Adoption = await this.findOne(id);
    this.imageRepository.query(`DELETE FROM Image WHERE adoptionId = ${id}`);
    return this.adoptionRepository.remove(Adoption);
  }
  async preloadImage(Cloudurl) {
    const Image = await this.imageRepository.findOne({ where: { Cloudurl } });
    if (Image) {
      return Image;
    }
    return this.imageRepository.create({ Cloudurl });
  }
}
