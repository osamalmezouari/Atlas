import {Column} from "typeorm";

export class CreateUserDto {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  active: boolean;
  facebook: string;
  WhatsApp: string;
  phone: string;
  CreatedDate: number;
  role: string;
}
