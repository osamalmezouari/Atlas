import { HttpStatus, Injectable } from "@nestjs/common";
import * as mysql from "mysql";
import { Reviews } from "./entities/review.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Reviews)
    private readonly ReviewsRepository: Repository<Reviews>,
  ) {}

  findAll(): Promise<Reviews[]> {
    return this.ReviewsRepository.find();
  }

  // create(review: Review): Promise<void> {
  //   return new Promise((resolve, reject) => {
  //     this.connection.query(
  //       "INSERT INTO reviews SET ?",
  //       review,
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
    const review = await this.ReviewsRepository.findOne({ where: { id } });
    if (!review) {
      throw new Error(`review with the id = ${id} ${HttpStatus.NOT_FOUND}`);
    }
    return this.ReviewsRepository.remove(review);
  }
}
