// Schema para entidade PersonProfile
import { PersonProfile } from '@features/pessoas/domain/aggregates/PersonProfile.aggregate';
import { Pessoa } from '@features/pessoas/domain/entities/person.entity';
import { Profile } from '@features/pessoas/domain/entities/profile.entity';
import { EntitySchema } from 'typeorm';

export const PersonProfileSchema = new EntitySchema<any>({
  name: 'PersonProfile',
  tableName: 'pessoa_perfil',
  target: PersonProfile,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    pessoa_id: {
      type: Number,
    },
    perfil_id: {
      type: Number,
    },
    curso_id: {
      type: Number,
    },
    entidade_id: {
      type: Number,
    },
    semestre: {
      type: String,
    },
    created_at: {
      type: Date,
    },
    created_by: {
      type: Number,
    },
  },
  relations: {
    pessoa: {
      type: 'many-to-one',
      target: () => Pessoa,
      joinColumn: { name: 'pessoa_id' },
    },
    profile: {
      type: 'many-to-one',
      target: () => Profile,
      joinColumn: { name: 'perfil_id' },
    },
  },
});
