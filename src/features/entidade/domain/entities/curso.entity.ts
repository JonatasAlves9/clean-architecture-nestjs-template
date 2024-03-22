import { BaseEntity } from '@shared/base/baseEntity';
import { Entidade } from './entidade.entity';

export class Curso extends BaseEntity {
  hashid: string;
  nome: string;
  criterio_avaliacao_id: number;

  // Relations
  entidades: Entidade[];
}
