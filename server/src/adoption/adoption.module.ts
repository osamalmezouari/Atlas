// adoption.module.ts
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdoptionController } from "./adoption.controller";
import { AdoptionService } from "./adoption.service";
import { Adoption } from "./entities/adoption.entity";
import { Image } from "./entities/images.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Adoption, Image])],
  controllers: [AdoptionController],
  providers: [AdoptionService],
})
export class AdoptionModule {}
