// app/page.tsx
import React from 'react';
import UserList from '@/components/UserList';

const HomePage: React.FC = () => (
  <main>
    <h1>Welcome to the Developer Portal</h1>
    <UserList />
  </main>
);

export default HomePage;
