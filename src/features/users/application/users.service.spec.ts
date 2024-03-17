import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { CreateUserValidationProvider } from '../infra/validations/create-user-validation';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, CreateUserValidationProvider],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return user by username', () => {
    service.findByUsername('maria');
    expect(service.findByUsername('maria')).toEqual({
      userId: 2,
      username: 'maria',
      password: 'guess',
    });
  });
});
