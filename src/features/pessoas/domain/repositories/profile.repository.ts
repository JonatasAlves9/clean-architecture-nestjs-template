import { Profile } from '../entities/profile.entity';

export interface PersonRepositoryInterface {
  findAll(): Promise<Profile[] | null>;
}
