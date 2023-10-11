const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mx-auto p-4 flex flex-col items-center translate-y-32'>
      <h2 className='font-bold text-4xl'>protected</h2>
      <div className='m-8'>{children}</div>
    </div>
  );
};
export default Layout;
