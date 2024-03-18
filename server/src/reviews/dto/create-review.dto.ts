import { Column } from "typeorm";

export class CreateReviewDto {
  @Column({ nullable: false })
  comment: String;
  @Column({ nullable: false })
  rating: Number;
}
