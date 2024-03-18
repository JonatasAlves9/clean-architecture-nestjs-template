import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../pessoas/application/person.service';
import { JwtServiceContract } from '@shared/abstractions/jwt-service';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtServiceContract,
  ) {}

  async signIn(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);

    if (!user) {
      throw new UnauthorizedException('Usuário não foi encontrado');
    }

    const match = await argon.verify(user.password, password);

    if (!match) {
      throw new UnauthorizedException('Senha inválida');
    }

    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        username: user.username,
      },
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
