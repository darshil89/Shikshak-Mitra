import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        console.log("profile", profile);
        if (profile.email.endsWith("@gmail.com") === true) {
          console.log("your admin email = ", profile.email);
          profile.role = "admin";
        }
        if (profile.email.endsWith("@hiremeclub.com") === true) {
          console.log("your college email = ", profile.email);
          profile.role = "student";
        }
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          emailVerified: profile.email_verified,
          role: profile.role,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET,
  callbacks: {
    async jwt({ token, account, user, session }) {
      if (account) {
        token.accessToken = account.accessToken as string;
        token.id = user.id;
        token.emailVerified = user.emailVerified;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user.role = token.role;
      session.user.id = token.id;
      session.user.emailVerified = token.emailVerified;
      return session;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
