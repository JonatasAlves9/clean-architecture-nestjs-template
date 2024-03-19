import { PersonProfile } from '@features/pessoas/domain/aggregates/PersonProfile.aggregate';
import { PersonProfileRepositoryInterface } from '@features/pessoas/domain/repositories/person-profile.repository';
import { Repository } from 'typeorm';

export class PersonProfileTypeOrmRepository
  implements PersonProfileRepositoryInterface
{
  constructor(private ormRepo: Repository<PersonProfile>) {}

  async findByUserId(pessoa_id: number): Promise<PersonProfile[] | null> {
    return this.ormRepo
      .createQueryBuilder('pessoa_perfil')
      .where('pessoa_perfil.pessoa_id = :pessoa_id', { pessoa_id })
      .getMany();
  }
}
