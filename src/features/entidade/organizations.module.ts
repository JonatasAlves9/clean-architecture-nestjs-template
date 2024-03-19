import { Module } from '@nestjs/common';
import { OrganizationsService } from './application/organizations.service';
import { OrganizationsController } from './infra/controllers/organizations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntidadeSchema } from './infra/db/typeorm/schemas/entidade/entity.schema';
import { SemestreSchema } from './infra/db/typeorm/schemas/semestre/semestre.schema';

@Module({
  imports: [TypeOrmModule.forFeature([EntidadeSchema, SemestreSchema])],
  controllers: [OrganizationsController],
  providers: [OrganizationsService],
})
export class OrganizationsModule {}
