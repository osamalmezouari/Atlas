import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import { v4 as uuid } from "uuid";
@Entity()
export class Role {
  @BeforeInsert()
  generateuuid() {
    this.id = uuid();
  }
  @PrimaryGeneratedColumn("uuid")
  id: String;

  @Column({ nullable: false })
  Role: String;

  @OneToMany((type) => User, (user) => user.role)
  user: User[];
}
