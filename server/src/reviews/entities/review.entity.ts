import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column({ nullable: false })
  comment: String;
  @Column({ nullable: false })
  rating: Number;

  @ManyToOne((type) => User, (user) => user.review)
  user: User;
}
