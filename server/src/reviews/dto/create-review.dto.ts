import { Column } from "typeorm";

export class CreateReviewDto {
  comment: String;
  rating: Number;
  userId: String;
}
