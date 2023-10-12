'use client';
import { useSession, signOut } from 'next-auth/react';

import NavItem from './NavItem';

const NavList = () => {
  const { status } = useSession();

  const handleLogout = () =>
    signOut({
      callbackUrl: '/',
    });

  return (
    <ul className='w-full md:w-1/2 mx-auto flex flex-col md:flex-row text-center md:justify-around h-full items-center md:[&>*]:mr-4 [&>*]:mb-4 md:[&>*]:mb-0'>
      <NavItem href='/'>Home</NavItem>
      {status === 'unauthenticated' && <NavItem href='/login'>Login</NavItem>}
      {status === 'authenticated' && (
        <NavItem href='/protected/client'>Protected (client)</NavItem>
      )}
      {status === 'authenticated' && (
        <NavItem href='/protected/server'>Protected (server)</NavItem>
      )}
      {status === 'authenticated' && (
        <button
          className='bg-red-600 hover:bg-red-500 text-white text-sm md:text-base px-4 py-1 rounded-sm'
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </ul>
  );
};
export default NavList;
