import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtServiceContract } from '@shared/abstractions/jwt-service';
import { UsersModule } from '../pessoas/users.module';
import { AuthService } from './application/services/auth.service';
import { AuthController } from './presentation/controllers/auth.controller';
import { MenuController } from './presentation/controllers/menu.controller';
import { LocalStrategy } from './infra/services/local.strategy';
import { JwtServiceWrapper } from './infra/services/nest-jwt-service';
import { SessionSerializer } from './infra/services/session.serializer';
import { AuthenticatedGuard } from './infra/services/authentication.guard';
import { SignInUseCase } from './application/usecases/signin.usecase';
import { UsersService } from '@features/pessoas/application/services/person.service';
import { CryptServiceContract } from '@shared/abstractions/crypt-service';
import { Argon2CryptService } from '@shared/services/argon2-crypt';

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
    Argon2CryptService,
    {
      provide: SignInUseCase,
      useFactory: (
        usersService: UsersService,
        jwtService: JwtServiceContract,
        cryptService: CryptServiceContract,
      ) => {
        return new SignInUseCase(usersService, jwtService, cryptService);
      },
      inject: [UsersService, JwtService, Argon2CryptService],
    },
  ],
  controllers: [AuthController, MenuController],
})
export class AuthModule {}
