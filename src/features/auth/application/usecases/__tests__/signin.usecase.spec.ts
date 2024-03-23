import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { SignInUseCase } from '../signin.usecase';
import { PROFILE_TYPE } from '@shared/domain/value-objects/profile-type';

// Mock dos serviços necessários
const mockUsersService = {
  findByCPF: jest.fn(),
};

const mockJwtService = {
  sign: jest.fn(() => 'fakeAccessToken'),
};

const mockCryptService = {
  verify: jest.fn(),
};

describe('SignInUseCase', () => {
  let signInUseCase: SignInUseCase;

  beforeEach(() => {
    signInUseCase = new SignInUseCase(
      mockUsersService as any,
      mockJwtService as any,
      mockCryptService as any,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should throw NotFoundException if user is not found', async () => {
    mockUsersService.findByCPF.mockResolvedValueOnce(null);

    await expect(
      signInUseCase.execute('nonexistentcpf', 'password'),
    ).rejects.toThrow(NotFoundException);
  });

  it('should throw NotFoundException if user is inactive', async () => {
    const inactiveUser = { ativo: false };
    mockUsersService.findByCPF.mockResolvedValueOnce(inactiveUser);

    await expect(
      signInUseCase.execute('inactiveusercpf', 'password'),
    ).rejects.toThrow(NotFoundException);
  });

  it('should throw UnauthorizedException if password is invalid', async () => {
    const validUser = { ativo: true, password: 'correctpassword' };
    mockUsersService.findByCPF.mockResolvedValueOnce(validUser);
    mockCryptService.verify.mockResolvedValueOnce(false);

    await expect(
      signInUseCase.execute('validusercpf', 'incorrectpassword'),
    ).rejects.toThrow(UnauthorizedException);
  });

  it('should return user data and access token if login is successful', async () => {
    const validUser = {
      id: 'fakeUserId',
      username: 'fakeUsername',
      nome: 'Fake Name',
      foto: 'fakePhotoUrl',
      profiles: [
        {
          id: 'fakeProfileId',
          perfil_id: PROFILE_TYPE.DIRECTOR,
          entidade_id: 'fakeEntityId',
          profile: {
            id: 'fakeProfileId',
            nome: 'TODO',
          },
          entidade: {
            semestres: [],
            unidades_curriculares: [],
            hashid: 'fakeHashId',
            razao_social: 'fakeRazaoSocial',
            nome_fantasia: 'fakeNomeFantasia',
            cnpj: 'fakeCnpj',
          },
        },
      ],
    };
    const validPassword = 'correctpassword';
    mockUsersService.findByCPF.mockResolvedValueOnce(validUser);
    mockCryptService.verify.mockResolvedValueOnce(true);

    const result = await signInUseCase.execute('validusercpf', validPassword);

    expect(result).toEqual({
      access_token: 'fakeAccessToken',
      id: 'fakeUserId',
      name: 'Fake Name',
      firstName: 'Fake',
      photo: 'fakePhotoUrl',
      entitiesIds: ['fakeEntityId'],
      filterBySemester: false,
      filterByCurricularUnit: false,
      activeProfile: {
        id: 'fakeProfileId',
        name: 'TODO',
        profileId: 'fakeProfileId',
        curso: 'TODO',
        entity: expect.any(Object),
      },
    });
    expect(mockJwtService.sign).toHaveBeenCalledWith({
      username: 'fakeUsername',
      sub: 'fakeUserId',
    });
  });
});
