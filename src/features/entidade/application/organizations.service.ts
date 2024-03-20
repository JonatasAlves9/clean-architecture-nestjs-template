import { Injectable } from '@nestjs/common';
import { FindEntidadeWithAssociatedUserUseCase } from './usecases/find-entidade-with-associated-user.usecase';
import { Entidade } from '../domain/entities/entidade.entity';

@Injectable()
export class OrganizationsService {
  constructor(
    private findEntidadeWithAssociatedUserUseCase: FindEntidadeWithAssociatedUserUseCase,
  ) {}

  async findOrganizationsWhenUserAssociated(id: string) {
    const entities =
      await this.findEntidadeWithAssociatedUserUseCase.execute(id);
    return this.parseEntityToDTO(entities);
  }

  private parseEntityToDTO(entities: Entidade[] | null) {
    return entities?.map((entity) => {
      return {
        nome: entity.nome_fantasia,
        id: entity.id,
      };
    });
  }
}
