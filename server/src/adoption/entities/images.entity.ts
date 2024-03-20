import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Adoption } from "./adoption.entity";
import { v4 as uuid } from "uuid";
@Entity()
export class Image {
  @BeforeInsert()
  generateuuid() {
    this.id = uuid();
  }
  @PrimaryGeneratedColumn("uuid")
  id: String;
  @Column({ nullable: false })
  Cloudurl: String;

  @ManyToOne((type) => Adoption, (adoption) => adoption.image)
  adoption: Adoption;
}
