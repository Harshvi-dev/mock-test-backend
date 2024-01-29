import { Module } from '@nestjs/common';
import { RegistrationModule } from './registration/registration.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registration } from './registration/entities/registration.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Harshu@23',
      database: 'nestjs',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    RegistrationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
