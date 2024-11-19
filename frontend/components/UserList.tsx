'use client';

import React, { useEffect, useState } from 'react';
import { User } from '../interfaces/user';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(`${API_BASE_URL}/users`, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Failed to fetch users: ${response.statusText}`);
  return response.json();
};

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
