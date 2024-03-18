import { Pessoa } from '../entities/Person';

export interface PersonRepositoryInterface {
  findByUsername(username: string): Promise<Pessoa | null>;
}
