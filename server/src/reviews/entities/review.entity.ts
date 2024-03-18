import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reviews {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column({ nullable: false })
  comment: String;
  @Column({ nullable: false })
  rating: Number;
}
