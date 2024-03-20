import { Module } from '@nestjs/common';
import { OrganizationsService } from './application/organizations.service';
import { OrganizationsController } from './infra/controllers/organizations.controller';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { EntidadeSchema } from './infra/db/typeorm/schemas/entidade/entity.schema';
import { SemestreSchema } from './infra/db/typeorm/schemas/semestre/semestre.schema';
import { EntidadeTypeOrmRepository } from './infra/db/typeorm/repositories/entidade-typeorm.repository';
import { DataSource } from 'typeorm';
import { Entidade } from './domain/entities/entidade.entity';
import { FindEntidadeWithAssociatedUserUseCase } from './application/usecases/find-entidade-with-associated-user.usecase';
import { EntidadeRepositoryInterface } from './domain/repositories/entidade.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EntidadeSchema, SemestreSchema])],
  controllers: [OrganizationsController],
  providers: [
    OrganizationsService,
    {
      provide: EntidadeTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new EntidadeTypeOrmRepository(
          dataSource.getRepository(Entidade),
        );
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: FindEntidadeWithAssociatedUserUseCase,
      useFactory: (entidadeRepo: EntidadeRepositoryInterface) => {
        return new FindEntidadeWithAssociatedUserUseCase(entidadeRepo);
      },
      inject: [EntidadeTypeOrmRepository],
    },
  ],
})
export class OrganizationsModule {}
