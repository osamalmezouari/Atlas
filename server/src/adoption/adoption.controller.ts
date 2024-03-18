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

@Controller("adoption")
export class AdoptionController {
  constructor(private readonly adoptionService: AdoptionService) {}

  @Get()
  findAll(): Promise<Adoption[]> {
    return this.adoptionService.findAll();
  }

  @Get(":id")
  findById(@Param("id") id: string) {
    return this.adoptionService.findOne(+id);
  }

  // @Post()
  // create(@Body() createAdoptionDto: CreateAdoptionDto) {
  //   return this.adoptionService.create(createAdoptionDto);
  // }
  //
  // @Put(":id")
  // update(@Param("id") id: string, @Body() updatedAdoption: any): Promise<void> {
  //   return this.adoptionService.update(+id, updatedAdoption);
  // }
  //
  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.adoptionService.delete(+id);
  }
}
