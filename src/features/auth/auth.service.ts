import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/application/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(username: string, pass: string) {
    const user = this.usersService.findByUsername(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const { password, ...result } = user;
    console.log(password);

    return result;
  }
}
