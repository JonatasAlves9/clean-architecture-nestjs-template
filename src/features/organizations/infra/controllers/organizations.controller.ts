import { Controller, Get, Query, Req } from '@nestjs/common';
import { OrganizationsService } from '../../application/organizations.service';
import { Request } from 'express';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get('list-user-associated')
  findOrganizationsWhenUserAssociated(
    @Req() request: Request,
    @Query('userId') userId: string,
  ) {
    console.log('request', request.session);
    return this.organizationsService.findOrganizationsWhenUserAssociated(
      userId,
    );
  }
}
