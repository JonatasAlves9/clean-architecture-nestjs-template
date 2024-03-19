import { BaseEntity } from '@shared/base/baseEntity';
import { Profile } from '../entities/profile.entity';

export class PersonProfile extends BaseEntity {
  pessoa_id: number;
  entidade_id: number;
  perfil_id: number;
  curso_id: number;
  semestre: string;
  profile: Profile;
}
