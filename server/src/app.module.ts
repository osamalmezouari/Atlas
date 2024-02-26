import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersController } from "./users/users.controller";
import { UsersService } from "./users/users.service";
import { ReviewController } from "./reviews/review.controller";
import { ReviewService } from "./reviews/review.service";
import { ReviewModule } from "./reviews/review.module";
import { AdoptionModule } from "./adoption/adoption.module";
import { SocialService } from "./social/social.service";
import { RolesModule } from "./roles/roles.module";
import { RolesService } from "./roles/roles.service";
import { RolesController } from "./roles/roles.controller";
import { DonationModule } from "./donation/donation.module";
import { DonationService } from "./donation/donation.service";
import { DonationController } from "./donation/donation.controller";
import { SocialModule } from "./social/social.module";
import { SocialController } from "./social/social.controller";
import { WeblinkModule } from "./weblinks/weblinks.module";

@Module({
  imports: [
    ReviewModule,
    AdoptionModule,
    SocialModule,
    WeblinkModule,
    DonationModule,
    RolesModule,
  ],
  controllers: [
    AppController,
    UsersController,
    ReviewController,
    SocialController,
    DonationController,
    RolesController,
  ], // Add your UsersController to the controllers array
  providers: [
    AppService,
    UsersService,
    ReviewService,
    SocialService,
    DonationService,
    RolesService,
  ], // Add your UsersService to the providers array
})
export class AppModule {}
