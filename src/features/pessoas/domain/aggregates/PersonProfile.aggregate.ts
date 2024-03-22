import { Entidade } from '@features/entidade/domain/entities/entidade.entity';
import { Pessoa } from '../entities/person.entity';
import { Profile } from '../entities/profile.entity';
import { BaseEntity } from '@shared/base/baseEntity';

export class PersonProfile extends BaseEntity {
  pessoa_id: number;
  entidade_id: number;
  perfil_id: number;
  curso_id: number;
  semestre: string;

  // Relations
  pessoa: Pessoa;
  profile: Profile;
  entidade: Entidade;
}
