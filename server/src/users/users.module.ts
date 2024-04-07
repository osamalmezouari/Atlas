import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { RolesModule } from "../roles/roles.module";
import { Subscribes } from "./entities/Subscribe.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User, Subscribes]), RolesModule],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
