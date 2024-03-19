import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
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
      throw new NotFoundException('Usuário não encontrado');
    }

    const match = await argon.verify(user.password, password);

    if (!match) {
      throw new UnauthorizedException('Senha inválida');
    }

    // TODO - Pegar os perfis do usuário

    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
      user,
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
