import { CreateUserDto } from '@features/users/domain/dto/create-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserValidationProvider {
  async validateDto(dto: CreateUserDto): Promise<void> {
    const errors = [];
    if (!dto.username || dto.username.length < 3) {
      errors.push('Username deve conter pelo menos 3 caracteres.');
    }
    if (!dto.password || dto.password.length < 6) {
      errors.push('Password deve conter pelo menos 6 caracteres.');
    }
    if (!dto.email || !this.isValidEmail(dto.email)) {
      errors.push('Email inválido.');
    }
    if (errors.length > 0) {
      throw new Error(errors.join(', '));
    }
  }

  private isValidEmail(email: string): boolean {
    // Implemente sua lógica de validação de email aqui
    // Por exemplo, você pode usar uma expressão regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
