import { Entidade } from '@features/entidade/domain/entities/entidade.entity';
import { UnidadeCurricular } from '@features/entidade/domain/entities/unidades-curriculares.entity';
import { EntitySchema as TypeORMSchema } from 'typeorm';

export const UnidadeCurricularSchema = new TypeORMSchema<UnidadeCurricular>({
  name: 'UnidadeCurricular',
  tableName: 'unidade_curricular',
  target: UnidadeCurricular,
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
    curso_id: {
      type: Number,
    },
    semestre_id: {
      type: Number,
    },
    hash_id: {
      type: String,
    },
    ativo: {
      type: Boolean,
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
