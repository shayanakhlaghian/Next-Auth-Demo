import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const Server = async () => {
  console.log('SERVER PROTECTED RUNNING...');
  const session = await getServerSession(authOptions);
  if (!session) redirect('/');

  return <h3>SERVER</h3>;
};
export default Server;
