import { Controller } from '@nestjs/common';
import { UsersService } from '../../application/services/person.service';
import { CreateUserValidationProvider } from '../validations/create-user-validation';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly createUserValidationProvider: CreateUserValidationProvider,
  ) {}
}
