import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import * as mysql from "mysql";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find({
      relations: {
        adoption: true,
        review: true,
        role: true,
        networklinks: true,
      },
    });
  }
  async findOne(id: number) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(
        `could not find a user with id = ${id} ${HttpStatus.NOT_FOUND} `,
      );
    }
    return user;
  }

  // create(user: users): Promise<void> {
  //   return new Promise((resolve, reject) => {
  //     this.connection.query(
  //       'INSERT INTO users SET ?',
  //       user,
  //       (error, results, fields) => {
  //         if (error) {
  //           reject(error);
  //           return;
  //         }
  //         resolve();
  //       },
  //     );
  //   });
  // }
  //
  // update(id: number, updatedUser: users): Promise<void> {
  //   return new Promise((resolve, reject) => {
  //     this.connection.query(
  //       'UPDATE users SET ? WHERE user_ID = ?',
  //       [updatedUser, id],
  //       (error, results, fields) => {
  //         if (error) {
  //           reject(error);
  //           return;
  //         }
  //         resolve();
  //       },
  //     );
  //   });
  // }

  async delete(id: number) {
    const user = await this.findOne(id);
    return await this.usersRepository.remove(user);
  }
}
