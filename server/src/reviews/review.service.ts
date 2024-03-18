import { HttpStatus, Injectable } from "@nestjs/common";
import * as mysql from "mysql";
import { Review } from "./entities/review.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly ReviewsRepository: Repository<Review>,
  ) {}

  findAll(): Promise<Review[]> {
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
