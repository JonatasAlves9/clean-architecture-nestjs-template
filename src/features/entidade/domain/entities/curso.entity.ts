import { BaseEntity } from '@shared/base/baseEntity';
import { Entidade } from './entidade.entity';

export class Curso extends BaseEntity {
  hash_id: string;
  nome: string;
  criterio_avaliacao_id: number;

  // Relations
  entidades: Entidade[];
}
