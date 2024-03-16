import { User } from '../entities/User';

export interface UserRepositoryInterface {
  save(user: User): Promise<void>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  findByUsername(username: string): Promise<User | undefined>;
  delete(id: string): Promise<void>;
  update(user: User): Promise<void>;
  findAll(): Promise<User[]>;
  exists(id: string): Promise<boolean>;
}
