import { PersonProfile } from '@features/pessoas/domain/aggregates/PersonProfile.aggregate';
import { Pessoa } from '@features/pessoas/domain/entities/person.entity';
import { EntitySchema } from 'typeorm';

export const UserSchema = new EntitySchema<any>({
  name: 'Pessoa',
  target: Pessoa,
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
    nome: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    cpf: {
      type: String,
    },
    telefone: {
      type: String,
    },
    dt_nascimento: {
      type: Date,
    },
    rg: {
      type: String,
    },
    sexo: {
      type: String,
    },
    logradouro: {
      type: String,
    },
    numero: {
      type: String,
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
    cbo_id: {
      type: Number,
    },
    escolaridade_id: {
      type: Number,
    },
    deficiente: {
      type: Boolean,
    },
    exp_profissional: {
      type: String,
    },
    autorizacoes: {
      type: String,
    },
    custom_fields: {
      type: String,
    },
    autorizado: {
      type: Boolean,
    },
    ativo: {
      type: Boolean,
    },
    conselho: {
      type: String,
    },
    dados_bancarios: {
      type: String,
    },
    username: {
      type: String,
    },
    perfil_ativo_id: {
      type: Number,
    },
    codigo_2fa: {
      type: String,
    },
    codigo_2fa_data: {
      type: Date,
    },
    dt_ultimo_acesso: {
      type: Date,
    },
    ip_ultimo_acesso: {
      type: String,
    },
    reset_password_token: {
      type: String,
    },
    reset_password_sent_at: {
      type: Date,
    },
    user_token_app: {
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
    updated_by: {
      type: Number,
    },
    token_2fa: {
      type: String,
    },
    token_sent_at: {
      type: Date,
    },
    arquivo_cv_id: {
      type: Number,
    },
    foto: {
      type: String,
    },
    controle_ponto: {
      type: Boolean,
    },
    ponto_qrcode: {
      type: String,
    },
    ponto_pin: {
      type: String,
    },
    password_changed_at: {
      type: Date,
    },
    password_changed_by: {
      type: Number,
    },
    password_changed_ip: {
      type: String,
    },
    carga_horaria_semanal: {
      type: Number,
    },
    tipo_vinculo: {
      type: String,
    },
    valor_hora: {
      type: Number,
    },
    dt_cadastro_app: {
      type: Date,
    },
    ip_cadastro_app: {
      type: String,
    },
  },
  relations: {
    profiles: {
      type: 'many-to-many',
      target: () => PersonProfile,
      joinTable: {
        name: 'pessoa_perfil',
        joinColumn: { name: 'pessoa_id' },
        inverseJoinColumn: { name: 'id' },
      },
    },
  },
});
