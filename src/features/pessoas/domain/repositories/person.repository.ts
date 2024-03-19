import { Pessoa } from '../entities/person.entity';

export interface PersonRepositoryInterface {
  findByCPF(cpf: string): Promise<Pessoa | null>;
}
