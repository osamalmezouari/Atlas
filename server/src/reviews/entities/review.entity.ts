import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import { v4 as uuid } from "uuid";

@Entity()
export class Review {
  @BeforeInsert()
  generateuuid() {
    this.id = uuid();
  }
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ nullable: false })
  comment: string;
  @Column({ type: "bigint", nullable: false })
  CreatedDate: number;
  @Column({ nullable: false })
  rating: number;
  @ManyToOne(() => User, (user) => user.review)
  user: User;
}
