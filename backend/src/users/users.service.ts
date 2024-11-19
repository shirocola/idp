import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  create(createUserDto: CreateUserDto): User {
    return this.usersRepository.create(createUserDto);
  }

  findAll(): User[] {
    return this.usersRepository.findAll();
  }

  findOne(id: number): User | undefined {
    return this.usersRepository.findOne(id);
  }
}
