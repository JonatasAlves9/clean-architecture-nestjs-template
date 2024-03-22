import { Repository } from 'typeorm';

import { UnidadeCurricular } from '@features/entidade/domain/entities/unidades-curriculares.entity';
import { UnidadesCurricularesRepositoryInterface } from '@features/entidade/domain/repositories/unidades-curriculares.repository.interface';

export class UnidadesCurricularesRepository
  implements UnidadesCurricularesRepositoryInterface
{
  constructor(private ormRepo: Repository<UnidadeCurricular>) {}

  findUnidadeCurricularByEntidadeId(
    entityId: string,
  ): Promise<UnidadeCurricular[] | null> {
    return this.ormRepo
      .createQueryBuilder('unidade_curricular')
      .leftJoinAndSelect('unidade_curricular.entidade', 'entidade')
      .where('entidade.hashid = :entityId', { entityId })
      .getMany();
  }
}
