import { Column } from "typeorm";

export class CreateUserDto {
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
