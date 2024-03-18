import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

// Modules
import { UsersModule } from '@features/pessoas/users.module';
import { AuthModule } from '@features/auth/auth.module';
import { OrganizationsModule } from '@features/organizations/organizations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from '@features/pessoas/infra/db/typeorm/schemas/person/person.schema';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule,
    OrganizationsModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development', '.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [UserSchema],
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
})
export class AppModule {}
