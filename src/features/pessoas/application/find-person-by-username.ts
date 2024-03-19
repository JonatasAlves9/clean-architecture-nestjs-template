import { Pessoa } from '../domain/entities/Person.entity';
import { PersonProfileRepositoryInterface } from '../domain/repositories/person-profile.repository';
import { PersonRepositoryInterface } from '../domain/repositories/person.repository';

export class FindUserByUsernameUseCase {
  constructor(
    private personRepo: PersonRepositoryInterface,
    private profileRepo: PersonProfileRepositoryInterface,
  ) {}

  async execute(params: FindUserByUsernameInput): Promise<Pessoa | null> {
    const user = await this.personRepo.findByUsername(params.username);

    return user;
  }
}

type FindUserByUsernameInput = {
  username: string;
};
