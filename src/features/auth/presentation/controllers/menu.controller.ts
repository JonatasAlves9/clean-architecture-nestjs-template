import { Controller, Get } from '@nestjs/common';
import { AuthService } from '../../application/services/auth.service';

@Controller('auth')
export class MenuController {
  constructor(private readonly authService: AuthService) {}

  @Get('menu')
  getMenu() {
    return this.authService.getMenu();
  }
}
