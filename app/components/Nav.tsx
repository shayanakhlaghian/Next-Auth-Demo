'use client';
import { useSession, signOut } from 'next-auth/react';

import NavItem from './NavItem';

const Nav = () => {
  const { status } = useSession();

  const handleLogout = () =>
    signOut({
      callbackUrl: '/',
    });

  return (
    <nav>
      <ul className='w-full md:w-1/2 mx-auto flex justify-around h-full items-center md:[&>*]:mr-4'>
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
    </nav>
  );
};
export default Nav;
