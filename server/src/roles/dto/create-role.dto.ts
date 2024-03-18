import { Column } from "typeorm";

export class CreateRoleDto {
  @Column({ nullable: false })
  Role: String;
}
