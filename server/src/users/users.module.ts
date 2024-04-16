import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { RolesModule } from "../roles/roles.module";
import { Subscribes } from "./entities/Subscribe.entity";
import {JwtModule} from "@nestjs/jwt";
import jwtConstants from "../Authentication/constants";

@Module({
  imports: [TypeOrmModule.forFeature([User, Subscribes]), RolesModule,JwtModule.register({
    global: true,
    secret: "test" ,
    signOptions: { expiresIn: '60s' },
  })],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
