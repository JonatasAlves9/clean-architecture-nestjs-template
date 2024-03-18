import { Repository } from 'typeorm';
import { PersonRepositoryInterface } from '@features/pessoas/domain/repositories/person.repository';
import { Pessoa } from '@features/pessoas/domain/entities/Person';

export class PersonTypeOrmRepository implements PersonRepositoryInterface {
  constructor(private ormRepo: Repository<Pessoa>) {}

  findByUsername(username: string): Promise<Pessoa | null> {
    return this.ormRepo.findOne({
      where: {
        username,
      },
    });
  }
}
