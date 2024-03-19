import { Module } from '@nestjs/common';
import { OrganizationsService } from './application/organizations.service';
import { OrganizationsController } from './infra/controllers/organizations.controller';

@Module({
  controllers: [OrganizationsController],
  providers: [OrganizationsService],
})
export class OrganizationsModule {}
