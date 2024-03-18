import { Injectable } from '@nestjs/common';

@Injectable()
export class OrganizationsService {
  organizationsExample = [
    {
      id: 1,
      name: 'Organization 1',
      userId: '1',
    },
    {
      id: 2,
      name: 'Organization 2',
      userId: '1',
    },
    {
      id: 3,
      name: 'Organization 3',
      userId: '2',
    },
    {
      id: 4,
      name: 'Organization 4',
      userId: '2',
    },
  ];
  findOrganizationsWhenUserAssociated(id: string) {
    return this.organizationsExample
      .filter((organization) => organization.userId === id)
      .map((item) => {
        return {
          id: item.id,
          name: item.name,
        };
      });
  }
}
