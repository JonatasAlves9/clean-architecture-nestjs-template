import { BaseEntity } from '@shared/base/baseEntity';
import { UUID } from 'crypto';
import { PersonProfile } from '../aggregates/PersonProfile.aggregate';

export class Pessoa extends BaseEntity {
  hashid: UUID;
  cpf: string;
  nome: string;
  email: string;
  telefone: string;
  dt_nascimento: Date;
  rg: string;
  sexo: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade_id: number;
  cep: string;
  cbo_id: number;
  escolaridade_id: number;
  deficiente: boolean;
  exp_profissional: string;
  autorizacoes: string;
  custom_fields: string;
  autorizado: boolean;
  ativo: boolean;
  conselho: string;
  dados_bancarios: string;
  username: string;
  password: string;
  perfil_ativo_id: number;
  codigo_2fa: string;
  codigo_2fa_data: Date;
  dt_ultimo_acesso: Date;
  ip_ultimo_acesso: string;
  reset_password_token: string;
  reset_password_sent_at: Date;
  user_token_app: string;
  token_2fa: string;
  token_sent_at: Date;
  arquivo_cv_id: number;
  foto: string;
  controle_ponto: boolean;
  ponto_qrcode: string;
  ponto_pin: string;
  password_changed_at: Date;
  password_changed_by: number;
  password_changed_ip: string;
  carga_horaria_semanal: number;
  tipo_vinculo: string;
  valor_hora: number;
  dt_cadastro_app: Date;
  ip_cadastro_app: string;

  profiles: PersonProfile[];

  constructor(pessoa: Partial<Pessoa>) {
    super();
    Object.assign(this, pessoa);
  }
}
