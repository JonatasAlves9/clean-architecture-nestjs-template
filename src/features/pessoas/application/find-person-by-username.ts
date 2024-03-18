import { Pessoa } from '../domain/entities/Person';
import { PersonRepositoryInterface } from '../domain/repositories/person.repository';

export class FindUserByUsernameUseCase {
  constructor(private routeRepo: PersonRepositoryInterface) {}

  async execute(params: FindUserByUsernameInput): Promise<Pessoa | null> {
    return await this.routeRepo.findByUsername(params.username);
  }
}

type FindUserByUsernameInput = {
  username: string;
};
