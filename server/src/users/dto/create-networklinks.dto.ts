import { Column } from "typeorm";

export class CreateNetworklinksDto {
  @Column({ nullable: true })
  facebook: String;
  @Column({ nullable: true })
  whatssap: String;
  @Column({ nullable: true })
  phone: String;
  @Column({ nullable: false })
  email: string;
}
