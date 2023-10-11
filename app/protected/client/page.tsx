'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Client = () => {
  console.log('CLIENT PROTECTED RUNNING...');
  const { status } = useSession();

  if (status === 'unauthenticated') redirect('/');

  return <h3>CLIENT</h3>;
};
export default Client;
