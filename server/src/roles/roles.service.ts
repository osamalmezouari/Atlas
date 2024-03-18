import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Role } from "./entities/roles.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly rolesrepository: Repository<Role>,
  ) {}

  findAll(): Promise<Role[]> {
    return this.rolesrepository.find();
  }

  // create(){
  //   return this.rolerepository.create()
  // }

  async delete(id: number) {
    const role = this.rolesrepository.findOne({ where: { id } });
  }
}
