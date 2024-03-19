import { SignInUseCaseInterface } from '@features/auth/domain/usecases/signin.usecase';
import { UsersService } from '@features/pessoas/application/services/person.service';
import { PersonProfile } from '@features/pessoas/domain/aggregates/PersonProfile.aggregate';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CryptServiceContract } from '@shared/abstractions/crypt-service';
import { JwtServiceContract } from '@shared/abstractions/jwt-service';
import { ProfileType } from '@shared/domain/value-objects/profile-type';

export class SignInUseCase implements SignInUseCaseInterface {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtServiceContract,
    private readonly cryptService: CryptServiceContract,
  ) {}

  async execute(cpf: string, password: string): Promise<any | null> {
    const user = await this.usersService.findByUsername(cpf);

    if (!user || user.ativo === false) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const match = await this.cryptService.verify(user.password, password);

    if (!match) {
      throw new UnauthorizedException('Senha inválida');
    }

    const profiles = user.profiles;

    const hasPermission = profiles.find((profile) => {
      return profile.perfil_id === ProfileType.DIRECTOR;
    });

    if (!hasPermission) {
      throw new UnauthorizedException('Usuário não autorizado');
    }

    let activeProfile = null;
    for (let i = profiles.length - 1; i >= 0; i--) {
      if (profiles[i].perfil_id === ProfileType.DIRECTOR) {
        activeProfile = this.parseProfile(profiles[i]);
        break;
      }
    }

    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
      id: user.id,
      name: user.nome,
      firstName: user.nome.split(' ')[0],
      photo: user.foto ? user.foto : null,
      entitiesIds: 'TODO', //entitiesIds,
      filterBySemester: 'TODO', //count(semesters) > 1,
      filterByCurricularUnit: 'TODO', //count(curricularUnits) > 1,
      activeProfile,
    };
  }

  private parseProfile(profiles: PersonProfile) {
    return {
      id: profiles.id,
      name: profiles.profile.nome,
      profileId: profiles.profile.id,
      curso: 'TODO',
      entity: 'TODO',
    };
  }
}
