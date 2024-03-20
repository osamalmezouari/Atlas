import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from "@nestjs/common";
import { ReviewService } from "./review.service";
import { Review } from "./entities/review.entity";
import { CreateReviewDto } from "./dto/create-review.dto";

@Controller("reviews")
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  findAll(): Promise<Review[]> {
    return this.reviewService.findAll();
  }
  @Post()
  create(@Body() createreviewdto: CreateReviewDto): Promise<Review> {
    return this.reviewService.create(createreviewdto);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.reviewService.delete(id);
  }
}
