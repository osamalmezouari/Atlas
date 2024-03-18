import {
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
import { NetworkLinks } from "./networklinks.entity";
import { Review } from "../../reviews/entities/review.entity";

@Entity()
export class User {
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

  @OneToMany((type) => Adoption, (Adoption) => Adoption.user, { cascade: true })
  adoption: Adoption[];

  @ManyToOne((type) => Role, (role) => role.user, { cascade: true })
  role: Role;

  @OneToMany((type) => NetworkLinks, (netwroklinks) => netwroklinks.user, {
    cascade: true,
  })
  networklinks: NetworkLinks[];

  @OneToMany((type) => Review, (review) => review.user, { cascade: true })
  review: Review[];
}
