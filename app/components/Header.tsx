import Link from 'next/link';

import Nav from './Nav';
import MobileNav from './MobileNav';
import Toggle from './Toggle';

const Header = () => {
  return (
    <header className='bg-slate-100 border-b border-gray-400 fixed top-0 left-0 shadow-md w-full h-16 flex items-center py-1 md:flex-row px-4 md:px-16 lg:px-20 md:items-center justify-between overflow-hidden z-[20]'>
      <Link href='/'>
        <h1 className='font-light text-xl md:text-2xl tracking-wide'>NAD</h1>
      </Link>
      <Nav />
      <Toggle />
      <MobileNav />
    </header>
  );
};
export default Header;
