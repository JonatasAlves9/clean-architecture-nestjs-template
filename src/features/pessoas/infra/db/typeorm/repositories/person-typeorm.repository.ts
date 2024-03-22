import { Repository } from 'typeorm';
import { PersonRepositoryInterface } from '@features/pessoas/domain/repositories/person.repository';
import { Pessoa } from '@features/pessoas/domain/entities/person.entity';

export class PersonTypeOrmRepository implements PersonRepositoryInterface {
  constructor(private ormRepo: Repository<Pessoa>) {}

  findByCPF(cpf: string): Promise<Pessoa | null> {
    return this.ormRepo
      .createQueryBuilder('pessoa')
      .where('pessoa.cpf = :cpf', { cpf })
      .leftJoinAndSelect('pessoa.profiles', 'profiles')
      .leftJoinAndSelect('profiles.profile', 'profile')
      .leftJoinAndSelect('profiles.entidade', 'entidade')
      .leftJoinAndSelect('entidade.semestres', 'semestres')
      .leftJoinAndSelect(
        'entidade.unidades_curriculares',
        'unidades_curriculares',
      )
      .getOne();
  }
}
