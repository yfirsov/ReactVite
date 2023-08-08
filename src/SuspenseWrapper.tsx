import { CircularProgress } from '@mui/material';
import React, { Suspense } from 'react';

export interface SuspenseWrapper {
  children: React.ReactNode;
}

const SuspenseWrapper = ({ children }: SuspenseWrapper) => {
  return <Suspense fallback={<CircularProgress />}>{children}</Suspense>;
};

export default SuspenseWrapper;
