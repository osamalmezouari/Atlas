import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Role } from "./entities/roles.entity";
import { RolesService } from "./roles.service";
import { RolesController } from "./roles.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RolesService],
  controllers: [RolesController],
  exports: [RolesService], // to user
})
export class RolesModule {}
