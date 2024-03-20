import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
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

  create(createUserDto: CreateUserDto): Promise<User> {
    this.usersRepository.create(createUserDto);
    return this.usersRepository.save(createUserDto);
  }

  async update(id: String, updatedUser: UpdateUserDto) {
    await this.usersRepository.preload(updatedUser);
    return this.usersRepository.save({
      id,
      ...updatedUser,
    });
  }

  async delete(id: String) {
    const user = await this.findOne(id);
    return await this.usersRepository.remove(user);
  }
}
