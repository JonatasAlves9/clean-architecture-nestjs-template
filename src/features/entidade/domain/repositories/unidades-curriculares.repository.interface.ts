import { UnidadeCurricular } from '../entities/unidades-curriculares.entity';

export interface UnidadesCurricularesRepositoryInterface {
  findUnidadeCurricularByEntidadeId(
    entityId: string,
  ): Promise<UnidadeCurricular[] | null>;
}
