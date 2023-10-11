import Nav from './Nav';

const Header = () => {
  return (
    <header className='bg-slate-100 border-b border-gray-400 fixed top-0 left-0 shadow-md w-full h-16 flex flex-col items-center py-1 md:flex-row md:px-16 lg:px-20 md:items-center md:justify-between'>
      <h1 className='font-light text-xl md:text-2xl tracking-wide'>NAD</h1>
      <Nav />
    </header>
  );
};
export default Header;
