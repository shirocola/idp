// interfaces/IUserService.ts
import { User } from './user';

export interface IUserService {
  getUsers(): Promise<User[]>;
  createUser(user: Partial<User>): Promise<User>;
}
