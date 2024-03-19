import { Pessoa } from '@features/pessoas/domain/entities/person.entity';

export interface ValidateInformationAuthenticationUseCaseInterface {
  execute(person: Pessoa): Promise<void | null>;
}
