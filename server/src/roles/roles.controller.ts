import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";

@Controller("roles")
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}
  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    console.log(id);
    return await this.rolesService.findOne(id);
  }
  @Post()
  async create(@Body() createroledto: CreateRoleDto) {
    return this.rolesService.create(createroledto);
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() updateroledto: UpdateRoleDto) {
    console.log(id);
    return this.rolesService.update(id, updateroledto);
  }
  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.rolesService.delete(id);
  }
}
