import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Image } from "./images.entity";
import { v4 as uuid } from "uuid";

@Entity()
export class Adoption {
  @BeforeInsert()
  generateuuid() {
    this.id = uuid();
  }
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ type: "bigint", nullable: true })
  posted_date: number;
  @Column({ type: "boolean", default: false })
  adopted: boolean;
  @Column({ nullable: false })
  animal_name: string;
  @Column({ nullable: false })
  animal_race: string;
  @Column({ nullable: false })
  animal_age: number;
  @Column({ nullable: false })
  animal_gender: string;
  @Column({ nullable: false })
  animal_class: string;
  @Column({ type: "text", nullable: false })
  description: string;
  @Column({ type: "float", nullable: true })
  weight: number;
  @Column({ nullable: false })
  health: string;
  // @Column({ type: "float", nullable: false })
  // longitude: number;
  // @Column({ type: "float", nullable: false })
  // latitude: number;
  @Column({ nullable: false })
  location: string;
  @Column({ type: "boolean", nullable: false })
  castrate: boolean;
  @Column()
  Vaccinated: boolean;
  @Column({ nullable: true })
  likes: number;
  @Column({ nullable: true })
  loves: number;

  @ManyToOne(() => User, (user) => user.adoption)
  user: User;
  @OneToMany(() => Image, (image) => image.adoption, { cascade: true })
  image: Image[];
}
