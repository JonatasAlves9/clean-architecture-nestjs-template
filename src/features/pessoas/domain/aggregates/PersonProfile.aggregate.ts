import { BaseEntity } from '@shared/base/baseEntity';

export class PersonProfile extends BaseEntity {
  pessoa_id: number;
  entidade_id: number;
  curso_id: number;
  semestre: string;
}
