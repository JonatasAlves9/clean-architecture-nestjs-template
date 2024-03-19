import { Repository } from 'typeorm';
import { PersonRepositoryInterface } from '@features/pessoas/domain/repositories/person.repository';
import { Pessoa } from '@features/pessoas/domain/entities/Person.entity';

export class PersonTypeOrmRepository implements PersonRepositoryInterface {
  constructor(private ormRepo: Repository<Pessoa>) {}

  findByUsername(username: string): Promise<Pessoa | null> {
    return this.ormRepo
      .createQueryBuilder('pessoa')
      .where('pessoa.username = :username', { username })
      .leftJoinAndSelect('pessoa.profiles', 'profiles')
      .leftJoinAndSelect('profiles.profile', 'profile')
      .getOne();
  }
}
