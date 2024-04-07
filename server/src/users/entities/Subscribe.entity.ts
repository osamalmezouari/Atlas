import { Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Subscribes {
  @PrimaryColumn()
  email: string;
}
