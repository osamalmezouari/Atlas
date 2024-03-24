import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from "@nestjs/common";
import { AdoptionService } from "./adoption.service";
import { Adoption } from "./entities/adoption.entity";
import { CreateAdoptionDto } from "./dto/create-adoption.dto";
import { UpdateAdoptionDto } from "./dto/update-adoption.dto";
import { PaginationDto } from "../common/pagination.dto";

@Controller("adoptions")
export class AdoptionController {
  constructor(private readonly adoptionService: AdoptionService) {}

  @Get("locations")
  async findAllLocations (): Promise<string[]>{
    return await this.adoptionService.findAllLocations()
  }
  @Get()
  findAll(@Query() PaginationQuery: PaginationDto): Promise<Adoption[]> {
    //const { limit, offset } = PaginationQuery;
    return this.adoptionService.findAll();
  }
  @Get(":id")
  findById(@Param("id") id: string) {
    return this.adoptionService.findOne(id);
  }

  @Get(":class/:location")
  async findWithClassAndLocation(@Param('class') classParam: string, @Param('location') locationParam: string) {
    return await this.adoptionService.FindWithClassAndLocation(classParam,locationParam)
  }

  @Post()
  async create(@Body() createAdoptionDto: CreateAdoptionDto) {
    return await this.adoptionService.create(createAdoptionDto);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updatedAdoption: UpdateAdoptionDto,
  ) {
    return await this.adoptionService.update(id, updatedAdoption);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.adoptionService.delete(id);
  }

}
