import { UnidadeCurricularService } from '@features/entidade/application/services/unidade-curricular/unidade-curricular.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('curricular-unit')
export class UnidadeCurricularController {
  constructor(
    private readonly unidadeCurricularService: UnidadeCurricularService,
  ) {}

  @Get('list-user-associated')
  listUnidadesCurricularByEntidade(@Query('entidadeId') entidadeId: string) {
    return this.unidadeCurricularService.findUnidadeCurricularByEntityId(
      entidadeId,
    );
  }
}
