import { Repository } from 'typeorm';

import { Entidade } from '@features/entidade/domain/entities/entidade.entity';
import { EntidadeRepositoryInterface } from '@features/entidade/domain/repositories/entidade.repository';

export class EntidadeTypeOrmRepository implements EntidadeRepositoryInterface {
  constructor(private ormRepo: Repository<Entidade>) {}

  findEntidadeWithAssociatedUser(userId: string): Promise<Entidade[] | null> {
    return this.ormRepo
      .createQueryBuilder('entidade')
      .leftJoin('entidade.perfis', 'perfis') // Assumindo que a propriedade na entidade Entidade que representa o relacionamento com a tabela intermediária é 'pessoaPerfis'
      .leftJoin('perfis.pessoa', 'pessoa') // Assumindo que a propriedade na entidade PessoaPerfil que representa o relacionamento com Pessoa é 'pessoa'
      .where('pessoa.id = :userId', { userId })
      .leftJoinAndSelect('entidade.semestres', 'semestres')
      .getMany();
  }
}
