import { PersonProfile } from '../aggregates/PersonProfile.aggregate';

export interface PersonProfileRepositoryInterface {
  findByUserId(userId: number): Promise<PersonProfile[] | null>;
}
