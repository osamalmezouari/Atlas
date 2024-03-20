import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import { v4 as uuid4 } from "uuid";

@Entity()
export class Review {
  @BeforeInsert()
  generateuuid() {
    this.id = uuid4;
  }
  @PrimaryGeneratedColumn("uuid")
  id: String;
  @Column({ nullable: false })
  comment: String;
  @Column({ nullable: false })
  rating: Number;

  @ManyToOne((type) => User, (user) => user.review)
  user: User;
}
