import { BaseEntity } from '@shared/base/baseEntity';

export class User extends BaseEntity {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;

  constructor(
    id: string,
    name: string,
    username: string,
    email: string,
    password: string,
  ) {
    super();
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
