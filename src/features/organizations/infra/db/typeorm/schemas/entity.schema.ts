import { Organization } from '@features/organizations/domain/entities/Organization.entity';
import { EntitySchema as TypeORMSchema } from 'typeorm';

export const EntitySchema = new TypeORMSchema<Organization>({
  name: 'Entity',
  tableName: 'entidade',
  target: Organization,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    hashid: {
      type: String,
      nullable: true,
    },
    tipo_entidade_id: {
      type: Number,
    },
    cnpj: {
      type: String,
    },
    razao_social: {
      type: String,
    },
    nome_fantasia: {
      type: String,
    },
    logradouro: {
      type: String,
    },
    numero: {
      type: Number,
    },

    complemento: {
      type: String,
    },
    bairro: {
      type: String,
    },
    cidade_id: {
      type: Number,
    },
    cep: {
      type: String,
    },
    telefones: {
      type: String,
    },
    email: {
      type: String,
    },
    site: {
      type: String,
    },

    ativo: {
      type: Boolean,
    },
    logo: {
      type: String,
    },
    representante: {
      type: String,
    },
    representante_cargo: {
      type: String,
    },
    tce_seguradora_id: {
      type: Number,
    },
    tce_num_apolice: {
      type: String,
    },
    grupo: {
      type: String,
    },
    tce_modelo_rescisao: {
      type: String,
    },
    codigo_integracao: {
      type: String,
    },
    configuracoes: {
      type: String,
    },
    suporte: {
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
});
