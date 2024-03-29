import { NotFoundException, UnauthorizedException } from '@nestjs/common'; // TODO - Remove this line, implement your own exceptions

import { UsersService } from '@features/pessoas/application/services/person.service';

import { SignInUseCaseInterface } from '@features/auth/domain/usecases/signin.usecase';
import { PersonProfile } from '@features/pessoas/domain/aggregates/PersonProfile.aggregate';
import { PROFILE_TYPE } from '@shared/domain/value-objects/profile-type';

// Abstractions
import { JwtServiceContract } from '@shared/abstractions/jwt-service';
import { CryptServiceContract } from '@shared/abstractions/crypt-service';
import { Entidade } from '@features/entidade/domain/entities/entidade.entity';

export class SignInUseCase implements SignInUseCaseInterface {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtServiceContract,
    private readonly cryptService: CryptServiceContract,
  ) {}

  async execute(cpf: string, password: string): Promise<any | null> {
    const user = await this.usersService.findByCPF(cpf);

    if (!user || user.ativo === false) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const match = await this.cryptService.verify(user.password, password);

    if (!match) {
      throw new UnauthorizedException('Senha inválida');
    }

    const profiles = user.profiles;

    const hasPermission = profiles.find((profile) => {
      return profile.perfil_id === PROFILE_TYPE.DIRECTOR;
    });

    if (!hasPermission) {
      throw new UnauthorizedException('Usuário não autorizado');
    }

    let activeProfile = null;
    for (let i = profiles.length - 1; i >= 0; i--) {
      if (profiles[i].perfil_id === PROFILE_TYPE.DIRECTOR) {
        activeProfile = this.parseProfile(profiles[i]);
        break;
      }
    }

    const entitiesIds = profiles.map((profile) => profile.entidade_id);
    const payload = { cpf: user.cpf, sub: user.id };

    // Pegar todos os semestre de todos os perfis
    const semesters = profiles.map((profile) => profile.entidade.semestres);
    const unidades_curriculares = profiles.map(
      (profile) => profile.entidade.unidades_curriculares,
    );

    return {
      access_token: this.jwtService.sign(payload),
      id: user.id,
      name: user.nome,
      firstName: user.nome.split(' ')[0],
      photo: user.foto ? user.foto : null,
      entitiesIds: entitiesIds,
      filterBySemester: semesters.length > 1,
      filterByCurricularUnit: unidades_curriculares.length > 1,
      activeProfile,
    };
  }

  private parseProfile(personProfile: PersonProfile) {
    return {
      id: personProfile.id,
      name: personProfile.profile.nome,
      profileId: personProfile.profile.id,
      curso: 'TODO',
      entity: this.parseEntities(personProfile.entidade),
    };
  }

  private parseEntities(entidade: Entidade) {
    return {
      id: entidade.hashid,
      razaoSocial: entidade.razao_social,
      nomeFantasia: entidade.nome_fantasia,
      cnpj: entidade.cnpj,
      email: entidade.email,
    };
  }
}
