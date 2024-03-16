import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Modules
import { UsersModule } from './features/users/users.module';
import { AuthModule } from './features/auth/auth.module';

@Module({
  imports: [AuthModule, UsersModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
