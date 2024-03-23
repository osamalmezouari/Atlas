import { HttpStatus, Injectable } from "@nestjs/common";
import * as mysql from "mysql";
import { Review } from "./entities/review.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UsersService } from "../users/users.service";

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private readonly ReviewsRepository: Repository<Review>,
    private readonly userService: UsersService,
  ) {}

  findAll(): Promise<Review[]> {
    return this.ReviewsRepository.find({
      relations: {
        user: true,
      },
    });
  }

  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    const { userId, ...reviewData } = createReviewDto;
    const user = await this.userService.findOne(userId);
    const newReview = this.ReviewsRepository.create({
      ...reviewData,
      user: user,
    });
    return this.ReviewsRepository.save(newReview);
  }

  async delete(id: string) {
    const review = await this.ReviewsRepository.findOne({ where: { id } });
    if (!review) {
      throw new Error(`review with the id = ${id} ${HttpStatus.NOT_FOUND}`);
    }
    return this.ReviewsRepository.remove(review);
  }
}
