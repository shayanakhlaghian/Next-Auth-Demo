import Link from 'next/link';

const NavItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li className='font-bold px-4 py-1 rounded-sm hover:bg-gray-900 hover:text-slate-100 cursor-pointer text-sm md:text-base'>
      <Link href={href}>{children}</Link>
    </li>
  );
};
export default NavItem;
