import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller'; // Import your UsersController
import { UsersService } from './users/users.service'; // Import your UsersService
import { AnimalsModule } from './animals/animals.module';
import { AdoptionController } from './adoption/adoption.controller';
import { AdoptionService } from './adoption/adoption.service';
import { AdoptionModule } from './adoption/adoption.module';
import { ReviewsController } from './reviews/reviews.controller';
import { ReviewsService } from './reviews/reviews.service';
import { PhotosController } from './photos/photos.controller';
import { PhotosService } from './photos/photos.service';
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [AnimalsModule, AdoptionModule, PhotosModule],
  controllers: [AppController, UsersController, AdoptionController, ReviewsController, PhotosController], // Add your UsersController to the controllers array
  providers: [AppService, UsersService, AdoptionService, ReviewsService, PhotosService], // Add your UsersService to the providers array
})
export class AppModule {}
