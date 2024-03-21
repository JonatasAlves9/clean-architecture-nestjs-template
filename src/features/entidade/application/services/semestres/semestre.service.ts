import { Semestre } from '@features/entidade/domain/entities/semestre.entity';
import { Injectable } from '@nestjs/common';
import { FindSemestreByEntidadeIdUseCase } from '../../usecases/find-semestre-by-entity-id.usecase';

@Injectable()
export class SemestreService {
  constructor(
    private findSemestreByEntidadeIdUseCase: FindSemestreByEntidadeIdUseCase,
  ) {}

  async findSemestreByEntityId(id: string) {
    const semestres = await this.findSemestreByEntidadeIdUseCase.execute(id);
    return this.parseSemestreToDTO(semestres);
  }

  private parseSemestreToDTO(semestres: Semestre[] | null) {
    return semestres?.map((semestre) => {
      return {
        nome: semestre.nome,
        id: semestre.id,
      };
    });
  }
}
