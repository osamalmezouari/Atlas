// adoption.module.ts
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdoptionController } from "./adoption.controller";
import { AdoptionService } from "./adoption.service";
import { Adoption } from "./entities/adoption.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Adoption])],
  controllers: [AdoptionController],
  providers: [AdoptionService],
})
export class AdoptionModule {}
