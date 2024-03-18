export abstract class BaseEntity {
  id: string;
  created_by: number;
  updated_by: number | null;
  created_at: Date;
  updated_at: Date | null;
}
