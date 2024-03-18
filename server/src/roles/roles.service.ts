import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Roles } from "./entities/roles.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private readonly rolesrepository: Repository<Roles>,
  ) {}

  findAll(): Promise<Roles[]> {
    return this.rolesrepository.find();
  }

  // create(){
  //   return this.rolerepository.create()
  // }

  async delete(id: number) {
    const role = this.rolesrepository.findOne({ where: { id } });
  }
}
