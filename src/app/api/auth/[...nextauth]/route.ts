import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CreadentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CreadentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "username",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },

      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "paul",
          email: "paul@gmail.com",
        };

        return user;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
