import { Injectable } from '@nestjs/common';
import { ValidationError, validate } from 'class-validator';

@Injectable()
export class ValidationProvider {
  async validateDto<T extends object>(dto: T): Promise<void> {
    const errors: ValidationError[] = await validate(dto);
    if (errors.length > 0) {
      const validationErrors = errors
        .map((error) => Object.values(error.constraints || []))
        .flat();
      throw new Error(validationErrors.join(', '));
    }
  }
}
