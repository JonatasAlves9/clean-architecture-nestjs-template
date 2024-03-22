import { UnidadeCurricular } from '@features/entidade/domain/entities/unidades-curriculares.entity';
import { Injectable } from '@nestjs/common';
import { FindUnidadeCurricularByEntidadeIdUseCase } from '../../usecases/find-unidade-curricular-by-entity-id.usecase';

@Injectable()
export class UnidadeCurricularService {
  constructor(
    private findUnidadeCurricularByEntidadeIdUseCase: FindUnidadeCurricularByEntidadeIdUseCase,
  ) {}

  async findUnidadeCurricularByEntityId(id: string) {
    const unidades =
      await this.findUnidadeCurricularByEntidadeIdUseCase.execute(id);
    return this.parseUnidadeCurricularToDTO(unidades);
  }

  private parseUnidadeCurricularToDTO(
    unidadesCurriculares: UnidadeCurricular[] | null,
  ) {
    return unidadesCurriculares?.map((unidadeCurricular) => {
      return {
        nome: unidadeCurricular.nome,
        id: unidadeCurricular.id,
      };
    });
  }
}
