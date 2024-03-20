import { Entidade } from '../entities/entidade.entity';

export interface EntidadeRepositoryInterface {
  findEntidadeWithAssociatedUser(userId: string): Promise<Entidade[] | null>;
}
