'use client';
import React, { createContext } from 'react';
import { User } from '@/interfaces/user';

export interface IServiceContext {
  getUsers: () => Promise<User[]>;
  createUser: (user: Partial<User>) => Promise<User>;
}

export const ServiceContext = createContext<IServiceContext | null>(null);
