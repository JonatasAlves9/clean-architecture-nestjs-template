import { User } from '@features/users/domain/entities/User';
import { UserRepositoryInterface } from '@features/users/domain/repositories/user.repository';
import { Repository } from 'typeorm';

export class UserTypeOrmRepository implements UserRepositoryInterface {
  constructor(private ormRepo: Repository<User>) {}

  save(user: User): Promise<void> {
    console.log('user', user);
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<User | undefined> {
    console.log('email', email);
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<User | undefined> {
    console.log('id', id);
    throw new Error('Method not implemented.');
  }
  findByUsername(username: string): Promise<User | undefined> {
    console.log('username', username);
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    console.log('id', id);
    throw new Error('Method not implemented.');
  }
  update(user: User): Promise<void> {
    console.log('user', user);
    throw new Error('Method not implemented.');
  }
  exists(id: string): Promise<boolean> {
    console.log('id', id);
    throw new Error('Method not implemented.');
  }

  async insert(user: User): Promise<void> {
    await this.ormRepo.save(user);
  }

  findAll(): Promise<User[]> {
    return this.ormRepo.find();
  }
}
