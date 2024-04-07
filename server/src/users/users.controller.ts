import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateSubscribeDto } from "./dto/create-subscribe.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }
  @Get("UserStatistics")
  UserStatistics() {
    return this.usersService.UserStatistics();
  }
  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.usersService.findOne(id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post("/newSubscribe")
  async createSubscriber(@Body() createsubscriber: CreateSubscribeDto) {
    return this.usersService.createSubscriber(createsubscriber);
  }
  @Put(":id")
  async update(@Param("id") id: string, @Body() updatedUser: UpdateUserDto) {
    return await this.usersService.update(id, updatedUser);
  }
  @Delete(":id")
  async delete(@Param("id") id: string) {
    return await this.usersService.delete(id);
  }
}
