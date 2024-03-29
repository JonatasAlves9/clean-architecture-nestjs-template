import { BaseEntity } from '@shared/base/baseEntity';
import { Semestre } from './semestre.entity';
import { PersonProfile } from '@features/pessoas/domain/aggregates/person-profile.aggregate';
import { Curso } from './curso.entity';
import { UnidadeCurricular } from './unidades-curriculares.entity';

export class Entidade extends BaseEntity {
  tipo_entidade_id: number;
  cnpj: string;
  razao_social: string;
  nome_fantasia: string;
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade_id: number;
  cep: string;
  telefones: string;
  email: string;
  site: string;
  ativo: boolean;
  logo: string;
  representante: string;
  representante_cargo: string;
  tce_seguradora_id: number;
  tce_num_apolice: string;
  grupo: string;
  tce_modelo_rescisao: string;
  codigo_integracao: string;
  hashid: string;
  configuracoes: string;
  suporte: string;

  // Relations
  semestres: Semestre[];
  perfis: PersonProfile[];
  cursos: Curso[];
  unidades_curriculares: UnidadeCurricular[];
}
