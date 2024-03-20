import { HttpStatus, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Role } from "./entities/roles.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateRoleDto } from "./dto/update-role.dto";

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly rolesrepository: Repository<Role>,
  ) {}

  findAll(): Promise<Role[]> {
    return this.rolesrepository.find();
  }
  async findOne(id: String): Promise<Role> {
    return await this.rolesrepository.findOne({ where: { id } });
  }
  async create(createroledto) {
    this.rolesrepository.create({
      ...createroledto,
    });
    return this.rolesrepository.save({
      ...createroledto,
    });
  }
  async update(id: String, updateroledto: UpdateRoleDto) {
    console.log(id);
    const exsitingRole = await this.rolesrepository.preload({
      id,
      ...updateroledto,
    });
    if (!exsitingRole) {
      throw new Error(
        `no role with given id ${id} is match top update ${HttpStatus.NOT_FOUND}`,
      );
    }
    return this.rolesrepository.save({
      id,
      ...updateroledto,
    });
  }

  async delete(id: String) {
    const role = await this.rolesrepository.findOne({ where: { id } });
    return this.rolesrepository.remove(role);
  }
}
