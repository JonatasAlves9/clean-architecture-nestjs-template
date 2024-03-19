import { BaseEntity } from '@shared/base/baseEntity';
import { Entidade } from './entidade.entity';

export class Semestre extends BaseEntity {
  nome: string;
  entidade_id: number;
  turno_id: number;
  horario_inicial: string;
  horario_final: string;
  ordem: number;

  // Relations
  entidade: Entidade;
}
