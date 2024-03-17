import { Module } from '@nestjs/common';
import { AuthService } from './application/auth.service';
import { AuthController } from './infra/controllers/auth.controller';
import { UsersModule } from '../users/users.module';
import { MenuController } from './infra/controllers/menu.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtServiceWrapper } from './infra/services/nest-jwt-service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtServiceContract } from '@shared/abstractions/jwt-service';

@Module({
  imports: [
    UsersModule, // Importe o UsersModule antes de qualquer outro módulo
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET_KEY'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRATION_TIME'),
        },
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot(),
  ],
  providers: [
    AuthService,
    {
      provide: JwtServiceContract,
      useClass: JwtServiceWrapper,
    },
  ],
  controllers: [AuthController, MenuController],
})
export class AuthModule {}
