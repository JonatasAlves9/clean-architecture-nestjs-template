import { Entidade } from '@features/entidade/domain/entities/entidade.entity';
import { Semestre } from '@features/entidade/domain/entities/semestre.entity';
import { EntitySchema as TypeORMSchema } from 'typeorm';

export const SemestreSchema = new TypeORMSchema<Semestre>({
  name: 'Semestre',
  tableName: 'semestre',
  target: Semestre,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    nome: {
      type: String,
    },
    entidade_id: {
      type: Number,
    },
    turno_id: {
      type: Number,
    },
    horario_inicial: {
      type: String,
    },
    horario_final: {
      type: String,
    },
    ordem: {
      type: Number,
    },
    created_ip: {
      type: String,
    },
    created_at: {
      type: Date,
    },
    updated_at: {
      type: Date,
    },
    deleted_at: {
      type: Date,
    },
    deleted_by: {
      type: Number,
    },
    updated_by: {
      type: Number,
    },
    created_by: {
      type: Number,
    },
  },
  relations: {
    entidade: {
      type: 'many-to-one',
      target: () => Entidade,
      joinColumn: { name: 'entidade_id', referencedColumnName: 'id' },
    },
  },
});
