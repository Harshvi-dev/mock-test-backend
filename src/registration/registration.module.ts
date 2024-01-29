import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationController } from './registration.controller';
import { Registration } from './entities/registration.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [RegistrationController],
  imports:[TypeOrmModule.forFeature([Registration])],
  providers: [RegistrationService],
})
export class RegistrationModule {}
