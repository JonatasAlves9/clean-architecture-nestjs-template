import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtServiceContract } from '@shared/abstractions/jwt-service';
import { UsersModule } from '../pessoas/users.module';
import { AuthService } from './application/auth.service';
import { AuthController } from './infra/controllers/auth.controller';
import { MenuController } from './infra/controllers/menu.controller';
import { LocalStrategy } from './infra/services/local.strategy';
import { JwtServiceWrapper } from './infra/services/nest-jwt-service';
import { SessionSerializer } from './infra/services/session.serializer';
import { AuthenticatedGuard } from './infra/services/authentication.guard';

@Module({
  imports: [
    UsersModule,
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
    PassportModule.register({ session: true }),
  ],
  providers: [
    AuthService,
    {
      provide: JwtServiceContract,
      useClass: JwtServiceWrapper,
    },
    {
      provide: 'APP_GUARD',
      useClass: AuthenticatedGuard,
    },
    LocalStrategy,
    SessionSerializer,
  ],
  controllers: [AuthController, MenuController],
})
export class AuthModule {}
