import { Pessoa } from '../../domain/entities/person.entity';
import { PersonRepositoryInterface } from '../../domain/repositories/person.repository';

export class FindUserByUsernameUseCase {
  constructor(private personRepo: PersonRepositoryInterface) {}

  async execute(params: FindUserByUsernameInput): Promise<Pessoa | null> {
    const user = await this.personRepo.findByCPF(params.cpf);

    return user;
  }
}

type FindUserByUsernameInput = {
  cpf: string;
};
