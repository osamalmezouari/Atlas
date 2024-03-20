import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Image } from "../entities/images.entity";

export class CreateAdoptionDto {
  @Column({ nullable: false })
  posted_date: Date;
  @Column({ default: false })
  adopted: Boolean;
  @Column({ nullable: false })
  animal_name: String;
  @Column({ nullable: false })
  animal_race: String;
  @Column({ nullable: false })
  animal_age: Number;
  @Column({ nullable: false })
  animal_gender: String;
  @Column({ nullable: false })
  animal_class: String;
  @Column({ nullable: false })
  description: String;
  @Column({ nullable: true })
  weight: Number;
  @Column({ nullable: false })
  health: String;
  @Column({ nullable: false })
  castrate: Boolean;
  @Column({ nullable: false })
  image: String[];
}
