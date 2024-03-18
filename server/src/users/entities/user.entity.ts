import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column({ nullable: false })
  firstname: String;
  @Column({ nullable: false })
  lastname: String;
  @Column({ nullable: false })
  email: String;
  @Column({ nullable: false })
  password: String;
  @Column({ default: true })
  active: Boolean;
}
