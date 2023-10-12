import type { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

import { USERS } from '@/lib/constants';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password)
          throw new Error('username and password are required.');
        const { username: receivedUsername, password: receivedPassword } =
          credentials;

        const user = USERS.find(
          ({ username }) => username === receivedUsername
        );
        if (!user) throw new Error('username or password is wrong.');

        const { id, username, password } = user;
        if (password !== receivedPassword)
          throw new Error('username or password is wrong.');

        return { id, username };
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
