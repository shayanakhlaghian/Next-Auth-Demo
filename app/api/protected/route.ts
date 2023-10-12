import type { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';

import { authOptions } from '../auth/[...nextauth]/route';

export const GET = async (req: NextApiRequest) => {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({
      ok: false,
      statusCode: 401,
      message: 'Not Allowed.',
    });

  return NextResponse.json({
    ok: true,
    statusCode: 200,
    data: 'This is a [PROTECTED] data.',
  });
};
