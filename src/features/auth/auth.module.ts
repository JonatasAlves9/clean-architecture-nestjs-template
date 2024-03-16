import { Module } from '@nestjs/common';
import { AuthService } from './application/auth.service';
import { AuthController } from './infra/controllers/auth.controller';
import { UsersModule } from '../users/users.module';
import { MenuController } from './infra/controllers/menu.controller';

@Module({
  imports: [UsersModule],
  controllers: [AuthController, MenuController],
  providers: [AuthService],
})
export class AuthModule {}
