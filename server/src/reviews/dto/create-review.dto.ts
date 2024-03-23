import { Column } from "typeorm";

export class CreateReviewDto {
  comment: string;
  rating: number;
  userId: string;
}
