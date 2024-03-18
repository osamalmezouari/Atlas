import { Column } from "typeorm";

export class CreateImagesDto {
  @Column({ nullable: false })
  CloudIrl: String;
}
