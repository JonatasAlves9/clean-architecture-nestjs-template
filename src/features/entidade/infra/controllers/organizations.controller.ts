import { OrganizationsService } from '@features/entidade/application/services/entidades/entidades.service';
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get('list-user-associated')
  findOrganizationsWhenUserAssociated(@Req() request: Request) {
    const session = request.session as any;
    const idSession = session.passport.user.id;

    return this.organizationsService.findOrganizationsWhenUserAssociated(
      idSession,
    );
  }
}
