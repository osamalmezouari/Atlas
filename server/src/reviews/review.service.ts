import { HttpStatus, Injectable } from "@nestjs/common";
import * as mysql from "mysql";
import { Review } from "./entities/review.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateReviewDto } from "./dto/create-review.dto";

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly ReviewsRepository: Repository<Review>,
  ) {}

  findAll(): Promise<Review[]> {
    return this.ReviewsRepository.find();
  }

  create(createreviewdto: CreateReviewDto): Promise<Review> {
    console.log(createreviewdto);
    this.ReviewsRepository.create(createreviewdto);
    return this.ReviewsRepository.save(createreviewdto);
  }

  async delete(id: String) {
    const review = await this.ReviewsRepository.findOne({ where: { id } });
    if (!review) {
      throw new Error(`review with the id = ${id} ${HttpStatus.NOT_FOUND}`);
    }
    return this.ReviewsRepository.remove(review);
  }
}
