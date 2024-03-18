import { Module } from "@nestjs/common";
import { ReviewService } from "./review.service";
import { ReviewController } from "./review.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Reviews } from "./entities/review.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Reviews])],
  providers: [ReviewService],
  controllers: [ReviewController],
})
export class ReviewModule {}
