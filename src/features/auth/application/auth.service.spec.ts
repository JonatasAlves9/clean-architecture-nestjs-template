import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtServiceContract } from '@shared/abstractions/jwt-service';
import { UsersService } from '@features/users/application/users.service';

describe('AuthService', () => {
  let authService: AuthService;
  let jwtServiceMock: Partial<JwtServiceContract>;
  let usersServiceMock: Partial<UsersService>;

  beforeEach(async () => {
    // Criar um módulo de teste com AuthService e fornecer os serviços e mocks necessários
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: JwtServiceContract, useValue: jwtServiceMock },
        { provide: UsersService, useValue: usersServiceMock },
      ],
    }).compile();

    // Obter uma instância do AuthService do módulo de teste
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    // Verificar se o serviço AuthService está definido
    expect(authService).toBeDefined();
  });

  // Escreva outros testes para os métodos do AuthService aqui
});
