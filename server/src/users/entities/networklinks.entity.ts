import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NetworkLinks {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column({ nullable: true })
  facebook: String;
  @Column({ nullable: true })
  whatssap: String;
  @Column({ nullable: true })
  phone: String;
  @Column({ nullable: false })
  email: string;
}
