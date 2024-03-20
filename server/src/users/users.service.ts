import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { RolesService } from "../roles/roles.service";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly rolesService: RolesService,
  ) {}
  async findAll(): Promise<User[]> {
    return await this.usersRepository.find({
      relations: {
        adoption: {
          image: true,
        },
        review: true,
        role: true,
      },
    });
  }
  async findOne(id: String) {
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: {
        adoption: {
          image: true,
        },
        review: true,
        role: true,
      },
    });

    if (!user) {
      throw new NotFoundException(
        `could not find a user with id = ${id} ${HttpStatus.NOT_FOUND} `,
      );
    }
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    const roleassoc = await this.rolesService.preloadrolebyame(
      createUserDto.role || "user",
    );
    this.usersRepository.create({
      ...createUserDto,
      role: roleassoc,
    });
    return this.usersRepository.save({
      ...createUserDto,
      role: roleassoc,
    });
  }

  async update(id: String, updatedUser: UpdateUserDto) {
    const roleassoc = await this.rolesService.preloadrolebyame(
      updatedUser.role || "user",
    );
    await this.usersRepository.preload({
      id,
      ...updatedUser,
      role: roleassoc,
    });
    return await this.usersRepository.save({
      id,
      ...updatedUser,
      role: roleassoc,
    });
  }

  async delete(id: String) {
    const user = await this.findOne(id);
    return await this.usersRepository.remove(user);
  }
}
