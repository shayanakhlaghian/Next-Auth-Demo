'use client';
import { useContext } from 'react';

import { NavContext } from '@/context/nav-context';
import NavList from './NavList';

const MobileNav = () => {
  const { isOpen } = useContext(NavContext);

  return (
    <nav
      className='inline-block md:hidden bg-white shadow-lg w-[60%] h-screen fixed top-0 z-50 duration-200'
      style={{
        left: !isOpen ? '-100%' : 0,
      }}
    >
      <div className='absolute top-28 left-1/2 translate-x-[-50%]'>
        <NavList />
      </div>
    </nav>
  );
};
export default MobileNav;
