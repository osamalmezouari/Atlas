// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import * as url from 'url';
// import * as http from 'http';
//
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors'; // Import cors middleware

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors()); // Enable CORS globally
  await app.listen(3000);
}
bootstrap();
