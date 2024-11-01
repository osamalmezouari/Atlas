import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { RolesService } from "../roles/roles.service";
import { Subscribes } from "./entities/Subscribe.entity";
import { CreateSubscribeDto } from "./dto/create-subscribe.dto";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Subscribes)
    private readonly subscribers: Repository<Subscribes>,
    private readonly rolesService: RolesService,
    private jwtService: JwtService

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
  async findOne(id: string) {
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
    const salt = await bcrypt.genSalt(10);
    const password = createUserDto.password;
    const hashedPassword = await bcrypt.hash(password, salt);
    const roleassoc = await this.rolesService.preloadrolebyame(
      createUserDto.role || "user",
    );
    this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword,
      role: roleassoc,
      CreatedDate: Date.now(),
    });
    const userId = this.usersRepository.findOne({
      where: { firstname: createUserDto.firstname },
    });
    const payload = { sub: userId, firstname: createUserDto.firstname };
    return this.usersRepository.save({
      ...createUserDto,
      password: hashedPassword,
      role: roleassoc,
      CreatedDate: new Date().getTime(),
      access_token: await this.jwtService.signAsync(payload),
    });
  }

  createSubscriber(createsubscriber: CreateSubscribeDto) {
    this.subscribers.create(createsubscriber);
    return this.subscribers.save(createsubscriber);
  }

  async update(id: string, updatedUser: UpdateUserDto) {
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

  async delete(id: string) {
    const user = await this.findOne(id);
    return await this.usersRepository.remove(user);
  }

  async UserStatistics() {
    const query = `
    SELECT CreatedDate
    FROM user
    WHERE CreatedDate BETWEEN UNIX_TIMESTAMP(DATE_SUB(NOW(), INTERVAL 7 DAY)) * 1000 
    AND UNIX_TIMESTAMP(NOW()) * 1000;
  `;

    const rows = await this.usersRepository.query(query);
    const createdDates = rows.map((row) => row.CreatedDate);
    return createdDates;
  }
}
