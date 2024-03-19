import { BaseEntity } from '@shared/base/baseEntity';

export class Profile extends BaseEntity {
  nome: string;
  tipo_entidade: string;
  requer_curso: boolean;
  role: string;
}
