import { SemestreService } from '@features/entidade/application/services/semestres/semestre.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('semesters')
export class SemestreController {
  constructor(private readonly semestreService: SemestreService) {}

  @Get('list-user-associated')
  listSemestreByEntidade(@Query('entidadeId') entidadeId: string) {
    return this.semestreService.findSemestreByEntityId(entidadeId);
  }
}
