import { UnidadeCurricular } from '../entities/unidades-curriculares.entity';

export interface FindUnidadeCurricularByEntidadeIdUseCaseInterface {
  execute(entityId: string): Promise<UnidadeCurricular[] | null>;
}
