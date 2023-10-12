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
        if (!credentials?.username || !credentials?.password) return null;
        const { username: receivedUsername, password: receivedPassword } =
          credentials;

        const user = USERS.find(
          ({ username }) => username === receivedUsername
        );
        if (!user) return null;

        const { id, username, password } = user;
        if (password !== receivedPassword) return null;

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
