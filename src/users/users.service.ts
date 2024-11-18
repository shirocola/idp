import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
    private readonly users: User[] = [];

    create(user: User) {
        this.users.push(user);
        return user
    }

    findAll(): User[] {
        return this.users
    }

    findOne(id: number): User {
        return this.users.find(user => user.id === id)
    }
}
