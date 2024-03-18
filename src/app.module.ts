import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Modules
import { UsersModule } from '@features/users/users.module';
import { AuthModule } from '@features/auth/auth.module';
import { OrganizationsModule } from '@features/organizations/organizations.module';

@Module({
  imports: [AuthModule, UsersModule, ConfigModule, OrganizationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
