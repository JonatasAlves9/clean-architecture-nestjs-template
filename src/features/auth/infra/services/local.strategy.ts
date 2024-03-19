import { AuthService } from '@features/auth/application/services/auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const userName = username.toLowerCase();
    const user = await this.authService.signIn(userName, password);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}