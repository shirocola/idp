import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;
  const testUser: User = { id: 1, username: 'testuser', email: 'test@example.com' };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should create a user', () => {
    expect(service.create(testUser)).toEqual(testUser);
  });

  it('should find all users', () => {
    service.create(testUser);
    expect(service.findAll()).toEqual([testUser]);
  });

  it('should find a user by ID', () => {
    service.create(testUser);
    expect(service.findOne(1)).toEqual(testUser);
  });
});
