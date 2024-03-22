import { BaseEntity } from '@shared/base/baseEntity';
import { Entidade } from './entidade.entity';
import { Curso } from './curso.entity';
import { Semestre } from './semestre.entity';

export class UnidadeCurricular extends BaseEntity {
  nome: string;
  entidade_id: number;
  curso_id: number;
  semestre_id: number;
  hash_id: string;
  ativo: boolean;

  // Relations
  entidade: Entidade;
  curso: Curso;
  semestre: Semestre;
}
