import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { AuthService } from '../../../application/services/auth.service';
import { SignInDTO } from '@features/auth/domain/dto/signin.dto';

describe('AuthController', () => {
  let authController: AuthController;
  let authServiceMock: Partial<AuthService>;

  beforeEach(async () => {
    authServiceMock = {};

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{ provide: AuthService, useValue: authServiceMock }],
    }).compile();

    authController = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    // Verificar se o controlador AuthController está definido
    expect(authController).toBeDefined();
  });

  describe('signIn', () => {
    it('should call authService.signIn with the provided credentials', async () => {
      // Mock dos dados de entrada
      const createAuthDto: SignInDTO = {
        cpf: 'user',
        password: 'password',
      };

      // Mock do retorno de authService.signIn
      const signInResult = { access_token: 'access_token' };
      authServiceMock.signIn = jest.fn().mockResolvedValue(signInResult);

      // Chamar o método signIn do controlador
      const result = await authController.signIn(createAuthDto);

      // Verificar se o método signIn de authService foi chamado com os parâmetros corretos
      expect(authServiceMock.signIn).toHaveBeenCalledWith(
        createAuthDto.cpf,
        createAuthDto.password,
      );

      // Verificar se o resultado retornado é o mesmo que o resultado mockado de authService.signIn
      expect(result).toBe(signInResult);
    });
  });
});
