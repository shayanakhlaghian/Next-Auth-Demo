'use client';
import { useContext } from 'react';

import { NavContext } from '@/context/nav-context';

const Toggle = () => {
  const { toggle } = useContext(NavContext);

  return (
    <button
      className='h-8 w-9 flex flex-col items-center justify-between py-1 z-[100] relative md:hidden'
      onClick={toggle}
    >
      <span className='w-7 h-[3px] bg-black inline-block rounded-full' />
      <span className='w-7 h-[3px] bg-black inline-block rounded-full' />
      <span className='w-7 h-[3px] bg-black inline-block rounded-full' />
    </button>
  );
};
export default Toggle;
