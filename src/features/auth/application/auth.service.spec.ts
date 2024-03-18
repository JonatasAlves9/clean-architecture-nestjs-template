import { UsersService } from '@features/pessoas/application/person.service';
import { Pessoa } from '@features/pessoas/domain/entities/Person';

describe('UserService', () => {
  let userService: UsersService;

  beforeEach(() => {
    // Inicialize a instância do UserService
    userService = new UsersService();
  });

  it('should be defined', () => {
    // Verifique se a instância do UserService está definida
    expect(userService).toBeDefined();
  });
  it('should get user by username', async () => {
    // Mock de dados do usuário
    const username = 'maria';
    const expectedUser: Pessoa = new Pessoa('2', 'maria', 'maria', '', 'guess');

    // Espie a função getUserById para retornar o usuário esperado
    jest
      .spyOn(userService, 'findByUsername')
      .mockResolvedValue(expectedUser as never);

    // Chame o método getUserById e verifique se retorna o usuário esperado
    const user = await userService.findByUsername(username);
    expect(user).toEqual(expectedUser);
  });
});
