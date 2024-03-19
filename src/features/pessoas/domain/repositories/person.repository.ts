import { Pessoa } from '../entities/Person.entity';

export interface PersonRepositoryInterface {
  findByUsername(username: string): Promise<Pessoa | null>;
}
