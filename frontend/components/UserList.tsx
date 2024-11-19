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

  if (error)
    return (
      <div className="p-4 bg-red-100 text-red-700 font-bold rounded text-center">
        Error: {error}
      </div>
    );

  return (
    <div className="p-6 bg-gray-50 rounded shadow-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">User List</h2>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex justify-between items-center p-4 bg-white rounded shadow-sm hover:shadow-md"
          >
            <span className="font-semibold text-gray-800">{user.username}</span>
            <span className="italic text-gray-600">({user.email})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
