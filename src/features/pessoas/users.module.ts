import { Module } from '@nestjs/common';
import { UsersService } from './application/services/person.service';
import { UsersController } from './infra/controllers/person.controller';
import { CreateUserValidationProvider } from './infra/validations/create-user-validation';
import { Pessoa } from './domain/entities/person.entity';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { PersonTypeOrmRepository } from './infra/db/typeorm/repositories/person-typeorm.repository';
import { DataSource } from 'typeorm';
import { FindUserByUsernameUseCase } from './application/usecases/find-person-by-username';
import { PersonRepositoryInterface } from './domain/repositories/person.repository';
import { UserSchema } from './infra/db/typeorm/schemas/person/person.schema';
import { PersonProfileTypeOrmRepository } from './infra/db/typeorm/repositories/person-profile-typeorm.repository';
import { PersonProfile } from './domain/aggregates/PersonProfile.aggregate';
import { PersonProfileSchema } from './infra/db/typeorm/schemas/person_profile/person_profile.schema';
import { FindProfilesByIdUseCase } from './application/usecases/find-profiles-by-id';
import { PersonProfileRepositoryInterface } from './domain/repositories/person-profile.repository';
import { ProfileSchema } from './infra/db/typeorm/schemas/profile/profile.schema';
import { EntidadeSchema } from '@features/entidade/infra/db/typeorm/schemas/entity.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserSchema,
      EntidadeSchema,
      PersonProfileSchema,
      ProfileSchema,
    ]),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: PersonProfileTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new PersonProfileTypeOrmRepository(
          dataSource.getRepository(PersonProfile),
        );
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: PersonTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new PersonTypeOrmRepository(dataSource.getRepository(Pessoa));
      },
      inject: [getDataSourceToken()],
    },

    {
      provide: FindUserByUsernameUseCase,
      useFactory: (
        userRepo: PersonRepositoryInterface,
        personProfileRepo: PersonProfileRepositoryInterface,
      ) => {
        return new FindUserByUsernameUseCase(userRepo, personProfileRepo);
      },
      inject: [PersonTypeOrmRepository, PersonProfileTypeOrmRepository],
    },

    {
      provide: FindProfilesByIdUseCase,
      useFactory: (personProfileRepo: PersonProfileRepositoryInterface) => {
        return new FindProfilesByIdUseCase(personProfileRepo);
      },
      inject: [PersonProfileTypeOrmRepository],
    },
    CreateUserValidationProvider,
  ],
  exports: [UsersService],
})
export class UsersModule {}
