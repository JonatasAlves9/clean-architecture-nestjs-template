import { Module } from '@nestjs/common';
import { AuthService } from './application/auth.service';
import { AuthController } from './infra/controllers/auth.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
