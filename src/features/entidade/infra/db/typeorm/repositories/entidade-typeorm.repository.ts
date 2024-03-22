import { Repository } from 'typeorm';

import { Entidade } from '@features/entidade/domain/entities/entidade.entity';
import { EntidadeRepositoryInterface } from '@features/entidade/domain/repositories/entidade.repository';

export class EntidadeTypeOrmRepository implements EntidadeRepositoryInterface {
  constructor(private ormRepo: Repository<Entidade>) {}

  findEntidadeWithAssociatedUser(userId: string): Promise<Entidade[] | null> {
    return this.ormRepo
      .createQueryBuilder('entidade')
      .leftJoin('entidade.perfis', 'perfis')
      .leftJoin('perfis.pessoa', 'pessoa')
      .where('pessoa.id = :userId', { userId })
      .leftJoinAndSelect('entidade.cursos', 'cursos')
      .leftJoinAndSelect('entidade.semestres', 'semestres')
      .getMany();
  }
}
