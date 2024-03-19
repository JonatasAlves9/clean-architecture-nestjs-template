import { PersonProfile } from '../domain/aggregates/PersonProfile.aggregate';
import { PersonProfileRepositoryInterface } from '../domain/repositories/person-profile.repository';

export class FindProfilesByIdUseCase {
  constructor(private routeRepo: PersonProfileRepositoryInterface) {}

  async execute(
    params: FindUserByUsernameInput,
  ): Promise<PersonProfile[] | null> {
    return await this.routeRepo.findByUserId(params.id);
  }
}

type FindUserByUsernameInput = {
  id: number;
};
