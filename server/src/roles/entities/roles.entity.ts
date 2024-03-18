import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Roles {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column({ nullable: false })
  Role: String;
}
