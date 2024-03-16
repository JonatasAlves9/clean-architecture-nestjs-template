import { Module } from '@nestjs/common';
import { UsersService } from './application/users.service';
import { UsersController } from './infra/controllers/users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
