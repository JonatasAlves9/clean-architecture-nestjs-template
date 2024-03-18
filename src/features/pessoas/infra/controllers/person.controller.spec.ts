import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './perosn.controller';
import { UsersService } from '../../application/person.service';
import { CreateUserValidationProvider } from '../validations/create-user-validation';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, CreateUserValidationProvider],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
