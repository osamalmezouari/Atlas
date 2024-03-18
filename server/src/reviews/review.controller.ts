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

@Controller("reviews")
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  findAll(): Promise<Review[]> {
    return this.reviewService.findAll();
  }
  // @Post()
  // create(@Body() review: Review): Promise<void> {
  //   return this.reviewService.create(review);
  // }
  //

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.reviewService.delete(+id);
  }
}
