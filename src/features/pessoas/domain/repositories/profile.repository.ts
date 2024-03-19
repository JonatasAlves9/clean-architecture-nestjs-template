import { Profile } from '../entities/Profile.entity';

export interface PersonRepositoryInterface {
  findAll(): Promise<Profile[] | null>;
}
