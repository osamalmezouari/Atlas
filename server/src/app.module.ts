import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdoptionModule } from "./adoption/adoption.module";
import { UsersModule } from "./users/users.module";
import { RolesModule } from "./roles/roles.module";
import { ReviewModule } from "./reviews/review.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "animals_adoption",
      autoLoadEntities: true,
      synchronize: true,
    }),
    AdoptionModule,
    UsersModule,
    RolesModule,
    ReviewModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
