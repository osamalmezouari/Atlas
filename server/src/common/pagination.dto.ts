import { IsOptional, IsPositive } from "class-validator";
import { Type } from "class-transformer";

export class PaginationDto {
  @Type(() => Number)
  @IsPositive()
  @IsOptional()
  limit: number;
  @Type(() => Number)
  @IsPositive()
  @IsOptional()
  offset: number;
}
