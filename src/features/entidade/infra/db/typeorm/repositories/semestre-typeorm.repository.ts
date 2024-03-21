import { Repository } from 'typeorm';

import { Semestre } from '@features/entidade/domain/entities/semestre.entity';
import { SemestreRepositoryInterface } from '@features/entidade/domain/repositories/semestre.repository.interface';

export class SemestreTypeOrmRepository implements SemestreRepositoryInterface {
  constructor(private ormRepo: Repository<Semestre>) {}

  findSemestreByEntidadeId(entityId: string): Promise<Semestre[] | null> {
    return this.ormRepo
      .createQueryBuilder('semestre')
      .leftJoinAndSelect('semestre.entidade', 'entidade')
      .where('entidade.hashid = :entityId', { entityId })
      .getMany();
  }
}
