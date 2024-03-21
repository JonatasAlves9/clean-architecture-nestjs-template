import { Semestre } from '../entities/semestre.entity';

export interface SemestreRepositoryInterface {
  findSemestreByEntidadeId(entityId: string): Promise<Semestre[] | null>;
}
