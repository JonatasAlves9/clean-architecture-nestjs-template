import { Semestre } from '../entities/semestre.entity';

export interface FindSemestreByEntidadeIdUseCaseInterface {
  execute(entityId: string): Promise<Semestre[] | null>;
}
