import { Module } from '@nestjs/common';
import { UsersService } from './application/person.service';
import { UsersController } from './infra/controllers/perosn.controller';
import { CreateUserValidationProvider } from './infra/validations/create-user-validation';
import { Pessoa } from './domain/entities/Person';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { PersonTypeOrmRepository } from './infra/db/typeorm/repositories/person-typeorm.repository';
import { DataSource } from 'typeorm';
import { FindUserByUsernameUseCase } from './application/find-person-by-username';
import { PersonRepositoryInterface } from './domain/repositories/person.repository';
import { UserSchema } from './infra/db/typeorm/schemas/person/person.schema';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: PersonTypeOrmRepository,
      useFactory: (dataSource: DataSource) => {
        return new PersonTypeOrmRepository(dataSource.getRepository(Pessoa));
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: FindUserByUsernameUseCase,
      useFactory: (userRepo: PersonRepositoryInterface) => {
        return new FindUserByUsernameUseCase(userRepo);
      },
      inject: [PersonTypeOrmRepository],
    },
    // Validator
    CreateUserValidationProvider,
  ],
  exports: [UsersService],
})
export class UsersModule {}
