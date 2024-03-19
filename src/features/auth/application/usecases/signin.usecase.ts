import { SignInUseCaseInterface } from '@features/auth/domain/usecases/signin.usecase';
import { UsersService } from '@features/pessoas/application/person.service';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtServiceContract } from '@shared/abstractions/jwt-service';
import * as argon from 'argon2';
export class SignInUseCase implements SignInUseCaseInterface {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtServiceContract,
  ) {}

  async execute(username: string, password: string): Promise<any | null> {
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
}
