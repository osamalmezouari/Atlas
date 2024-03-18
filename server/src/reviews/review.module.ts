import { Module } from "@nestjs/common";
import { ReviewService } from "./review.service";
import { ReviewController } from "./review.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Review } from "./entities/review.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Review])],
  providers: [ReviewService],
  controllers: [ReviewController],
})
export class ReviewModule {}
