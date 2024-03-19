import { Injectable } from '@nestjs/common';
import { SignInUseCase } from '../usecases/signin.usecase';

@Injectable()
export class AuthService {
  constructor(private signInUseCase: SignInUseCase) {}

  async signIn(username: string, password: string) {
    return await this.signInUseCase.execute(username, password);
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
