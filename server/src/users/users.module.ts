import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { NetworkLinks } from "./entities/networklinks.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User, NetworkLinks])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
