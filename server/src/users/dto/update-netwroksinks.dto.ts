import { PartialType } from "@nestjs/mapped-types";
import { CreateNetworklinksDto } from "./create-networklinks.dto";

export class UpdateNetwroksinksDto extends PartialType(CreateNetworklinksDto) {}
