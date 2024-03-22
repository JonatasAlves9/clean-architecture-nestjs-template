import { UnidadeCurricular } from '@features/entidade/domain/entities/unidades-curriculares.entity';
import { UnidadesCurricularesRepositoryInterface } from '@features/entidade/domain/repositories/unidades-curriculares.repository.interface';
import { FindUnidadeCurricularByEntidadeIdUseCaseInterface } from '@features/entidade/domain/usecases/find-unidade-curricular-by-entidade-id.usecase';

export class FindUnidadeCurricularByEntidadeIdUseCase
  implements FindUnidadeCurricularByEntidadeIdUseCaseInterface
{
  constructor(private semestreRepo: UnidadesCurricularesRepositoryInterface) {}

  async execute(entityId: string): Promise<UnidadeCurricular[] | null> {
    return this.semestreRepo.findUnidadeCurricularByEntidadeId(entityId);
  }
}
