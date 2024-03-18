import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Adoption } from "./adoption.entity";

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column({ nullable: false })
  Cloudurl: String;

  @OneToMany((type) => Adoption, (adoption) => adoption.image)
  adoption: Adoption;
}
