import { Entidade } from '../entities/entidade.entity';

export interface FindEntidadeWithAssociatedUserUseCaseInterface {
  execute(userId: string): Promise<Entidade[] | null>;
}
