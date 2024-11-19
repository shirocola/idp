import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  private users: User[] = [];
  private idCounter = 1;

  create(user: Partial<User>): User {
    const newUser: User = {
        id: this.idCounter++, ...CreateUserDto,
        username: '',
        email: ''
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}
