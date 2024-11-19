// app/api-docs/page.tsx
'use client';

import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const ApiDocsPage: React.FC = () => (
  <SwaggerUI url="http://localhost:4000/api-docs-json" />
);

export default ApiDocsPage;
