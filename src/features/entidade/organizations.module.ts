import { Module } from '@nestjs/common';
import { OrganizationsController } from './infra/controllers/organizations.controller';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { EntidadeSchema } from './infra/db/typeorm/schemas/entidade/entity.schema';
import { SemestreSchema } from './infra/db/typeorm/schemas/semestre/semestre.schema';
import { EntidadeTypeOrmRepository } from './infra/db/typeorm/repositories/entidade-typeorm.repository';
import { DataSource } from 'typeorm';
import { Entidade } from './domain/entities/entidade.entity';
import { FindEntidadeWithAssociatedUserUseCase } from './application/usecases/find-entidade-with-associated-user.usecase';
import { EntidadeRepositoryInterface } from './domain/repositories/entidade.repository';
import { OrganizationsService } from './application/services/entidades/entidades.service';
import { SemestreRepositoryInterface } from './domain/repositories/semestre.repository.interface';
import { SemestreTypeOrmRepository } from './infra/db/typeorm/repositories/semestre-typeorm.repository';
import { Semestre } from './domain/entities/semestre.entity';
import { SemestreController } from './infra/controllers/semestre/semestre.controller';
import { SemestreService } from './application/services/semestres/semestre.service';
import { FindSemestreByEntidadeIdUseCase } from './application/usecases/find-semestre-by-entity-id.usecase';
import { CursoSchema } from './infra/db/typeorm/schemas/curso/curso.schema';
import { UnidadeCurricularSchema } from './infra/db/typeorm/schemas/unidade-curricular/unidade-curricular.schema';
import { UnidadesCurricularesRepository } from './infra/db/typeorm/repositories/unidade-curricular-typeorm.repository';
import { UnidadeCurricular } from './domain/entities/unidades-curriculares.entity';
import { UnidadeCurricularController } from './infra/controllers/unidade-curricular/unidade-curricular.controller';
import { UnidadeCurricularService } from './application/services/unidade-curricular/unidade-curricular.service';
import { FindUnidadeCurricularByEntidadeIdUseCase } from './application/usecases/find-unidade-curricular-by-entity-id.usecase';
import { UnidadesCurricularesRepositoryInterface } from './domain/repositories/unidades-curriculares.repository.interface';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EntidadeSchema,
      SemestreSchema,
      CursoSchema,
      UnidadeCurricularSchema,
    ]),
  ],
  controllers: [
    OrganizationsController,
    SemestreController,
    UnidadeCurricularController,
  ],
  providers: [
    OrganizationsService,
    SemestreService,
    UnidadeCurricularService,
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
      provide: UnidadesCurricularesRepository,
      useFactory: (dataSource: DataSource) => {
        return new UnidadesCurricularesRepository(
          dataSource.getRepository(UnidadeCurricular),
        );
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: SemestreTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new SemestreTypeOrmRepository(
          dataSource.getRepository(Semestre),
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
    {
      provide: FindSemestreByEntidadeIdUseCase,
      useFactory: (semestreRepo: SemestreRepositoryInterface) => {
        return new FindSemestreByEntidadeIdUseCase(semestreRepo);
      },
      inject: [SemestreTypeOrmRepository],
    },
    {
      provide: FindUnidadeCurricularByEntidadeIdUseCase,
      useFactory: (
        unidadeCurricularRepo: UnidadesCurricularesRepositoryInterface,
      ) => {
        return new FindUnidadeCurricularByEntidadeIdUseCase(
          unidadeCurricularRepo,
        );
      },
      inject: [UnidadesCurricularesRepository],
    },
  ],
})
export class OrganizationsModule {}
