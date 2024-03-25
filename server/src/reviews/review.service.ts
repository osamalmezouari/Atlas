import { HttpStatus, Injectable } from "@nestjs/common";
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
      CreatedDate: new Date().getTime(),
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

  async ReviewsStatistics() {
    const query = `
    SELECT CreatedDate
    FROM review
    WHERE CreatedDate BETWEEN UNIX_TIMESTAMP(DATE_SUB(NOW(), INTERVAL 7 DAY)) * 1000 
    AND UNIX_TIMESTAMP(NOW()) * 1000;
  `;

    const rows = await this.ReviewsRepository.query(query);
    const createdDates = rows.map((row) => row.CreatedDate);
    return createdDates;
  }
}
