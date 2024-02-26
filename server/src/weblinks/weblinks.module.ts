import { Module } from "@nestjs/common";
import { WeblinkService } from "./weblinks.service";
import { WeblinkController } from "./weblinks.controller";

@Module({
  providers: [WeblinkService],
  controllers: [WeblinkController],
})
export class WeblinkModule {}
