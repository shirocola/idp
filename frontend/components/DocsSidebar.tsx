'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const DocsSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Menu */}
      <button
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
        className="fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded-md md:hidden focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        ☰
      </button>

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-lg transform transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:block`}
      >
        <ul className="mt-10 space-y-4 px-6">
          {/* Getting Started */}
          <li>
            <h3 className="text-gray-700 font-bold uppercase text-sm mb-2">
              Getting Started
            </h3>
            <Link
              href="/docs/getting-started"
              className="block px-4 py-2 text-blue-600 font-medium hover:bg-blue-100 hover:text-blue-800 rounded-md transition-colors"
            >
              Onboarding Guide
            </Link>
          </li>

          {/* Boilerplates */}
          <li>
            <h3 className="text-gray-700 font-bold uppercase text-sm mb-2">
              Boilerplates
            </h3>
            <Link
              href="https://dev.azure.com/your-org/Node-Boilerplate"
              target="_blank"
              className="block px-4 py-2 text-blue-600 font-medium hover:bg-blue-100 hover:text-blue-800 rounded-md transition-colors"
            >
              Node.js Boilerplate
            </Link>
            <Link
              href="https://dev.azure.com/your-org/React-Boilerplate"
              target="_blank"
              className="block px-4 py-2 text-blue-600 font-medium hover:bg-blue-100 hover:text-blue-800 rounded-md transition-colors"
            >
              React Boilerplate
            </Link>
          </li>

          {/* Azure DevOps */}
          <li>
            <h3 className="text-gray-700 font-bold uppercase text-sm mb-2">
              Azure DevOps
            </h3>
            <Link
              href="https://dev.azure.com/your-org/_projects"
              target="_blank"
              className="block px-4 py-2 text-blue-600 font-medium hover:bg-blue-100 hover:text-blue-800 rounded-md transition-colors"
            >
              Projects
            </Link>
            <Link
              href="https://dev.azure.com/your-org/_pipelines"
              target="_blank"
              className="block px-4 py-2 text-blue-600 font-medium hover:bg-blue-100 hover:text-blue-800 rounded-md transition-colors"
            >
              Pipelines
            </Link>
            <Link
              href="https://dev.azure.com/your-org/_repos"
              target="_blank"
              className="block px-4 py-2 text-blue-600 font-medium hover:bg-blue-100 hover:text-blue-800 rounded-md transition-colors"
            >
              Repositories
            </Link>
          </li>

          {/* Tools & Utilities */}
          <li>
            <h3 className="text-gray-700 font-bold uppercase text-sm mb-2">
              Tools & Utilities
            </h3>
            <Link
              href="/docs/api-reference"
              className="block px-4 py-2 text-blue-600 font-medium hover:bg-blue-100 hover:text-blue-800 rounded-md transition-colors"
            >
              API Reference
            </Link>
            <Link
              href="https://docker.com"
              target="_blank"
              className="block px-4 py-2 text-blue-600 font-medium hover:bg-blue-100 hover:text-blue-800 rounded-md transition-colors"
            >
              Docker
            </Link>
            <Link
              href="https://kubernetes.io"
              target="_blank"
              className="block px-4 py-2 text-blue-600 font-medium hover:bg-blue-100 hover:text-blue-800 rounded-md transition-colors"
            >
              Kubernetes
            </Link>
          </li>

          {/* Team Documentation */}
          <li>
            <h3 className="text-gray-700 font-bold uppercase text-sm mb-2">
              Team Documentation
            </h3>
            <Link
              href="/docs/coding-standards"
              className="block px-4 py-2 text-blue-600 font-medium hover:bg-blue-100 hover:text-blue-800 rounded-md transition-colors"
            >
              Coding Standards
            </Link>
            <Link
              href="/docs/shared-resources"
              className="block px-4 py-2 text-blue-600 font-medium hover:bg-blue-100 hover:text-blue-800 rounded-md transition-colors"
            >
              Shared Resources
            </Link>
          </li>

          {/* Admin & Configurations */}
          <li>
            <h3 className="text-gray-700 font-bold uppercase text-sm mb-2">
              Admin & Configurations
            </h3>
            <Link
              href="/docs/setup-ci-cd"
              className="block px-4 py-2 text-blue-600 font-medium hover:bg-blue-100 hover:text-blue-800 rounded-md transition-colors"
            >
              CI/CD Setup
            </Link>
            <Link
              href="/docs/manage-secrets"
              className="block px-4 py-2 text-blue-600 font-medium hover:bg-blue-100 hover:text-blue-800 rounded-md transition-colors"
            >
              Secrets Management
            </Link>
          </li>
        </ul>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        ></div>
      )}
    </>
  );
};

export default DocsSidebar;
