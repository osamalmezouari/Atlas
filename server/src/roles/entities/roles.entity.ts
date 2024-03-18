import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";
@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column({ nullable: false })
  Role: String;

  @OneToMany((type) => User, (user) => user.role)
  user: User[];
}
