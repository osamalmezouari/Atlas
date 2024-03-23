import {
  BeforeInsert,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { JoinTable } from "typeorm/browser";
import { Adoption } from "../../adoption/entities/adoption.entity";
import { Role } from "../../roles/entities/roles.entity";
import { Review } from "../../reviews/entities/review.entity";
import { v4 as uuid } from "uuid";
@Entity()
export class User {
  @BeforeInsert()
  getuuid() {
    this.id = uuid();
  }
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ nullable: false, unique: true })
  firstname: string;
  @Column({ nullable: false, unique: true })
  lastname: string;
  @Column({ nullable: false, unique: true })
  email: string;
  @Column({ nullable: false })
  password: string;
  @Column({ nullable: true, unique: true })
  facebook: string;
  @Column({ nullable: true, unique: true })
  WhatsApp: string;
  @Column({ nullable: true, unique: true })
  phone: string;
  @Column({ default: true })
  active: boolean;

  @OneToMany((type) => Adoption, (Adoption) => Adoption.user, { cascade: true })
  adoption: Adoption[];

  @ManyToOne((type) => Role, (role) => role.user, { cascade: true })
  role: Role;

  @OneToMany((type) => Review, (review) => review.user, { cascade: true })
  review: Review[];
}
