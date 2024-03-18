import { PartialType } from "@nestjs/mapped-types";
import { CreateImagesDto } from "./create-images.dto";

export class UpdateImagesDto extends PartialType(CreateImagesDto) {}
