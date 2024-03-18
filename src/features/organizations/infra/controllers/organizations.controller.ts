import { Controller, Get, Query } from '@nestjs/common';
import { OrganizationsService } from '../../application/organizations.service';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get('list-user-associated')
  findOrganizationsWhenUserAssociated(@Query('userId') userId: string) {
    return this.organizationsService.findOrganizationsWhenUserAssociated(
      userId,
    );
  }
}
