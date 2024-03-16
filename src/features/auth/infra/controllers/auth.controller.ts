import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../../application/auth.service';
import { SignInDTO } from '../../domain/dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signIn(@Body() createAuthDto: SignInDTO) {
    return this.authService.signIn(createAuthDto.username, createAuthDto.pass);
  }
}
