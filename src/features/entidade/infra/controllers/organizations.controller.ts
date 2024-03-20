import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { OrganizationsService } from '../../application/organizations.service';

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
