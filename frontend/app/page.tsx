import React from 'react';
import DocsSidebar from '@/components/DocsSidebar';
import UserList from '@/components/UserList';

const HomePage: React.FC = () => (
  <div className="flex min-h-screen bg-gray-50">
    <main className="flex-1 p-6 md:ml-64">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Welcome to the Developer Portal
      </h1>
      <UserList />
    </main>
  </div>
);

export default HomePage;
