import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller'; // Import your UsersController
import { UsersService } from './users/users.service'; // Import your UsersService

@Module({
  imports: [],
  controllers: [AppController, UsersController], // Add your UsersController to the controllers array
  providers: [AppService, UsersService], // Add your UsersService to the providers array
})
export class AppModule {}
