import { Profile } from '@features/pessoas/domain/entities/Profile.entity';
import { EntitySchema } from 'typeorm';

export const ProfileSchema = new EntitySchema<any>({
  name: 'Perfil',
  tableName: 'perfil',
  target: Profile,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    nome: {
      type: String,
    },
    tipo_entidade_ids: {
      type: String,
    },
    requer_curso: {
      type: Boolean,
    },
    role: {
      type: String,
    },
  },
});
