import NextAuth, { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { prisma } from '../../../../lib/db';
const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;
      const userExists = await prisma.user.findFirst({
        where: {
          email: user.email,
        },
      });
      if (!userExists) {
        return false;
      }
      return true;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };