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
import { Review } from "./review.entity";

@Controller("reviews")
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  findAll(): Promise<Review[]> {
    return this.reviewService.findAll();
  }

  @Get(":id")
  findById(@Param("id") id: string): Promise<Review> {
    return this.reviewService.findById(+id);
  }

  @Post()
  create(@Body() review: Review): Promise<void> {
    return this.reviewService.create(review);
  }

  @Put(":id")
  update(
    @Param("id") id: string,
    @Body() updatedReview: Partial<Review>,
  ): Promise<void> {
    return this.reviewService.update(+id, updatedReview);
  }

  @Delete(":id")
  delete(@Param("id") id: string): Promise<void> {
    return this.reviewService.delete(+id);
  }
}
