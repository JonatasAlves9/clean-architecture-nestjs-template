import { Pessoa } from '../entities/person.entity';

export interface PersonRepositoryInterface {
  findByUsername(username: string): Promise<Pessoa | null>;
}
