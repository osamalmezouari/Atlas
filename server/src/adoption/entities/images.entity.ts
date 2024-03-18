import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Images {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column({ nullable: false })
  Cloudurl: String;
}
