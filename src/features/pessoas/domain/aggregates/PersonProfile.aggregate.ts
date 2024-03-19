import { BaseEntity } from '@shared/base/baseEntity';
import { Profile } from '../entities/profile.entity';
import { Organization } from '@features/organizations/domain/entities/Organization.entity';

export class PersonProfile extends BaseEntity {
  pessoa_id: number;
  entidade_id: number;
  perfil_id: number;
  curso_id: number;
  semestre: string;

  // Relations
  profile: Profile;
  entity: Organization;
}
