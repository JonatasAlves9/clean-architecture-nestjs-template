import { Semestre } from '@features/entidade/domain/entities/semestre.entity';
import { SemestreRepositoryInterface } from '@features/entidade/domain/repositories/semestre.repository.interface';
import { FindSemestreByEntidadeIdUseCaseInterface } from '@features/entidade/domain/usecases/find-semestre-by-entidade-id.usecase';

export class FindSemestreByEntidadeIdUseCase
  implements FindSemestreByEntidadeIdUseCaseInterface
{
  constructor(private semestreRepo: SemestreRepositoryInterface) {}

  async execute(entityId: string): Promise<Semestre[] | null> {
    return this.semestreRepo.findSemestreByEntidadeId(entityId);
  }
}
