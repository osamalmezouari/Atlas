import { Column, Decimal128, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Adoption {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column({ type: "datetime", nullable: false })
  posted_date: Date;
  @Column({ type: "boolean", default: false })
  adopted: Boolean;
  @Column({ nullable: false })
  animal_name: String;
  @Column({ nullable: false })
  animal_race: String;
  @Column({ nullable: false })
  animal_age: Number;
  @Column({ nullable: false })
  animal_gender: String;
  @Column({ nullable: false })
  animal_class: String;
  @Column({ type: "text", nullable: false })
  description: String;
  @Column({ type: "float", nullable: true })
  weight: Number;
  @Column({ nullable: false })
  health: String;
  @Column({ type: "float", nullable: false })
  longitude: Number;
  @Column({ type: "float", nullable: false })
  latitude: Number;
  @Column({ type: "boolean", nullable: false })
  castrate: Boolean;
}
