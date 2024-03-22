import { Entidade } from '@features/entidade/domain/entities/entidade.entity';
import { EntidadeRepositoryInterface } from '@features/entidade/domain/repositories/entidade.repository';
import { FindEntidadeWithAssociatedUserUseCaseInterface } from '@features/entidade/domain/usecases/find-entidade-with-associated-user.usecase';

export class FindEntidadeWithAssociatedUserUseCase
  implements FindEntidadeWithAssociatedUserUseCaseInterface
{
  constructor(private entidadeRepo: EntidadeRepositoryInterface) {}

  async execute(userId: string): Promise<Entidade[] | null> {
    console.log(await this.entidadeRepo.findEntidadeWithAssociatedUser(userId));
    return this.entidadeRepo.findEntidadeWithAssociatedUser(userId);
  }
}
