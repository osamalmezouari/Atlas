import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { RolesService } from "./roles.service";

@Controller("roles")
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}
  @Get()
  findAll() {
    this.rolesService.findAll();
  }
  // @Post()
  // create(@Body() createroledto: CreateRoleDto) {
  //   return this.rolesService.create();
  // }
  @Delete()
  delete(@Param(":id") id: number) {
    return this.rolesService.delete(+id);
  }
}
