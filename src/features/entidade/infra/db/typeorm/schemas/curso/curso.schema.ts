import { Entidade } from '@features/entidade/domain/entities/entidade.entity';
import { Curso } from '@features/entidade/domain/entities/curso.entity';
import { EntitySchema as TypeORMSchema } from 'typeorm';

export const CursoSchema = new TypeORMSchema<Curso>({
  name: 'Curso',
  tableName: 'curso',
  target: Curso,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    nome: {
      type: String,
    },
    criterio_avaliacao_id: {
      type: String,
    },
    hashid: {
      type: String,
    },
    created_at: {
      type: Date,
    },
    created_by: {
      type: Number,
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
  },
  relations: {
    entidades: {
      type: 'many-to-many',
      target: () => Entidade,
      joinTable: {
        name: 'entidade_curso',
        joinColumn: { name: 'curso_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'entidade_id', referencedColumnName: 'id' },
      },
    },
  },
});
