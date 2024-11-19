// services/UserService.ts
import { IUserService } from '@/interfaces/IUserService';
import { User } from '@/interfaces/user';

export class UserService implements IUserService {
  private API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';

  async getUsers(): Promise<User[]> {
    const response = await fetch(`${this.API_BASE_URL}/users`, { cache: 'no-store' });
    return response.json();
  }

  async createUser(user: Partial<User>): Promise<User> {
    const response = await fetch(`${this.API_BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return response.json();
  }
}
