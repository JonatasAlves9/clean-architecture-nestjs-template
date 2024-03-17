import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../users/application/users.service';
import { JwtServiceContract } from '@shared/abstractions/jwt-service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtServiceContract,
  ) {}

  async signIn(username: string, pass: string) {
    const user = this.usersService.findByUsername(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async getMenu() {
    return [
      {
        title: 'Home',
        url: '/home',
        icon: 'home',
      },
      {
        title: 'Users',
        url: '/users',
        icon: 'people',
      },
    ];
  }
}
