import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AdoptionService } from './adoption.service';
import { AdoptionEntity } from './adoption.entity';

@Controller('adoption')
export class AdoptionController {
  constructor(private readonly adoptionService: AdoptionService) {}

  @Get()
  findAll(): Promise<any[]> {
    return this.adoptionService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<AdoptionEntity> {
    return this.adoptionService.findById(+id);
  }

  @Post()
  create(@Body() adoption: any): Promise<void> {
    return this.adoptionService.create(adoption);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedAdoption: any): Promise<void> {
    return this.adoptionService.update(+id, updatedAdoption);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.adoptionService.delete(+id);
  }
}
