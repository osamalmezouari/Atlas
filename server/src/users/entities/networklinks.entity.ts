import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class NetworkLinks {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column({ nullable: true })
  facebook: String;
  @Column({ nullable: true })
  WhatsApp: String;
  @Column({ nullable: true })
  phone: String;
  @Column({ nullable: false })
  email: string;

  @ManyToOne((type) => User, (user) => user.networklinks)
  user: User;
}
