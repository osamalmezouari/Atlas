import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { users } from './users.entity';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<users[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<users> {
    return await this.usersService.findById(id);
  }

  @Post()
  async create(@Body() user: users): Promise<void> {
    await this.usersService.create(user);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatedUser: users): Promise<void> {
    await this.usersService.update(id, updatedUser);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.usersService.delete(id);
  }
}
