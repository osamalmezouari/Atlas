import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from "@nestjs/common";
import { WeblinkService } from "./weblinks.service";
import { Weblink } from "./weblinks.entity";

@Controller("weblinks")
export class WeblinkController {
  constructor(private readonly weblinkService: WeblinkService) {}

  @Get()
  findAll(): Promise<Weblink[]> {
    return this.weblinkService.findAll();
  }

  @Get(":id")
  findById(@Param("id") id: string): Promise<Weblink> {
    return this.weblinkService.findById(+id);
  }

  @Post()
  create(@Body() weblink: Weblink): Promise<void> {
    return this.weblinkService.create(weblink);
  }

  @Put(":id")
  update(
    @Param("id") id: string,
    @Body() updatedWeblink: Partial<Weblink>,
  ): Promise<void> {
    return this.weblinkService.update(+id, updatedWeblink);
  }

  @Delete(":id")
  delete(@Param("id") id: string): Promise<void> {
    return this.weblinkService.delete(+id);
  }
}
