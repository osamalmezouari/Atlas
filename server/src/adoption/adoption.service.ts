import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Adoption } from "./entities/adoption.entity";
import { Repository } from "typeorm";
import { CreateAdoptionDto } from "./dto/create-adoption.dto";

@Injectable()
export class AdoptionService {
  constructor(
    @InjectRepository(Adoption)
    private readonly adoptionRepository: Repository<Adoption>,
  ) {}

  findAll(): Promise<Adoption[]> {
    return this.adoptionRepository.find();
  }

  async findOne(id: number) {
    const Adoption = await this.adoptionRepository.findOne({ where: { id } });
    if (!Adoption) {
      throw new NotFoundException(
        ` Adoption with id = ${id} ${HttpStatus.NOT_FOUND} `,
      );
    }
    return Adoption;
  }

  // async create(createAdoptionDto: CreateAdoptionDto) {
  //   const Adoption = this.AdoptionRepository.create(createAdoptionDto)
  //   return this.AdoptionRepository.save(Adoption)
  // }
  //
  // update(id: number, updatedAdoption: Partial<Adoption[]>): Promise<void> {
  //   return;
  // }
  //
  async delete(id: number) {
    const Adoption = await this.findOne(id);
    return this.adoptionRepository.remove(Adoption);
  }
}
