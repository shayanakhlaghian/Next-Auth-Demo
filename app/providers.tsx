'use client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';

import { NavProvider } from './context/nav-context';

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <NavProvider>{children}</NavProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
};
export default Providers;
