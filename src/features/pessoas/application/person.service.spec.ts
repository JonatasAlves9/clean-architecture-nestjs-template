import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './person.service';
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
      id: '2',
      name: 'maria',
      username: 'maria',
      password: 'guess',
      email: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    });
  });
});
