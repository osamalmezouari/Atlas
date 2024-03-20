import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from "@nestjs/common";
import { AdoptionService } from "./adoption.service";
import { Adoption } from "./entities/adoption.entity";
import { CreateAdoptionDto } from "./dto/create-adoption.dto";
import { UpdateAdoptionDto } from "./dto/update-adoption.dto";

@Controller("adoption")
export class AdoptionController {
  constructor(private readonly adoptionService: AdoptionService) {}

  @Get()
  findAll(): Promise<Adoption[]> {
    return this.adoptionService.findAll();
  }

  @Get(":id")
  findById(@Param("id") id: String) {
    return this.adoptionService.findOne(id);
  }

  @Post()
  async create(@Body() createAdoptionDto: CreateAdoptionDto) {
    return await this.adoptionService.create(createAdoptionDto);
  }

  @Put(":id")
  async update(
    @Param("id") id: String,
    @Body() updatedAdoption: UpdateAdoptionDto,
  ) {
    return await this.adoptionService.update(id, updatedAdoption);
  }

  @Delete(":id")
  delete(@Param("id") id: String) {
    return this.adoptionService.delete(id);
  }
}
