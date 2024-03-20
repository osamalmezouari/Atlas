import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import { v4 as uuidv4 } from "uuid";
@Entity()
export class Role {
  @BeforeInsert()
  generateuuid() {
    this.id = uuidv4;
  }
  @PrimaryGeneratedColumn("uuid")
  id: String;

  @Column({ nullable: false })
  Role: String;

  @OneToMany((type) => User, (user) => user.role)
  user: User[];
}
