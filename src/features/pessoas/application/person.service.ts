import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../domain/dto/create-user.dto';
import { UpdateUserDto } from '../domain/dto/update-user.dto';
import { Pessoa } from '../domain/entities/Person.entity';
import { FindUserByUsernameUseCase } from './find-person-by-username';
import { FindProfilesByIdUseCase } from './find-profiles-by-id';

@Injectable()
export class UsersService {
  constructor(
    private findUserByUsername: FindUserByUsernameUseCase,
    private findProfilesByUserId: FindProfilesByIdUseCase,
  ) {}
  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findByUsername(username: string): Promise<Pessoa | null> {
    console.log(this.findUserByUsername.execute({ username }));
    return this.findUserByUsername.execute({ username });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
