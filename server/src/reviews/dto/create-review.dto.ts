import { Column } from "typeorm";
import { User } from "../../users/entities/user.entity";

export class CreateReviewDto {
  @Column({ nullable: false })
  comment: String;
  @Column({ nullable: false })
  rating: Number;
}
