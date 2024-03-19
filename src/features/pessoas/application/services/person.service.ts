import { Injectable } from '@nestjs/common';
import { Pessoa } from '../../domain/entities/person.entity';
import { FindUserByUsernameUseCase } from '../usecases/find-person-by-username';

@Injectable()
export class UsersService {
  constructor(private findByCPFUseCase: FindUserByUsernameUseCase) {}

  async findByCPF(cpf: string): Promise<Pessoa | null> {
    return this.findByCPFUseCase.execute({ cpf });
  }
}
