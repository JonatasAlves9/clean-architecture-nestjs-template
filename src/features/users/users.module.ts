import { Module } from '@nestjs/common';
import { UsersService } from './application/users.service';
import { UsersController } from './infra/controllers/users.controller';
import { CreateUserValidationProvider } from './infra/validations/create-user-validation';

@Module({
  controllers: [UsersController],
  providers: [UsersService, CreateUserValidationProvider],
  exports: [UsersService],
})
export class UsersModule {}
