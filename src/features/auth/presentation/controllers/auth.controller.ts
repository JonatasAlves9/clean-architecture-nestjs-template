import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../../application/services/auth.service';
import { SignInDTO } from '../../domain/dto/signin.dto';
import { Public } from '@shared/decorators/public.decorator';
import { LocalGuard } from '@features/auth/infra/services/local.auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalGuard)
  @Post('signin')
  signIn(@Body() signInDTO: SignInDTO) {
    // TODO - Validar DTO
    return this.authService.signIn(signInDTO.cpf, signInDTO.password);
  }
}
