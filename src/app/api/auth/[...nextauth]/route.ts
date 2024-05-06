import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
const whiteListedEmails = ["user1@example.com", "user2@example.com", "guillaume.falvet@gmail.co"];
export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
};

export const handler = NextAuth(
  {
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID ?? "",
        clientSecret: process.env.GITHUB_SECRET ?? "",
      }),
    ],
    callbacks: {
      async signIn({ email, user }) {
        console.log("signIn", { email });
        if(!user.email) return false;
        // Check if the email is in the list of allowed emails
        // ! use db instead of hardcoded list
        const isAllowedToSignIn = whiteListedEmails.includes(user.email);
        if (isAllowedToSignIn) {
          return true; // Continue with sign-in process
        } else {
          // Redirect to an unauthorized page or return false to display a default error message
          return false;
          // Or you can return a URL to redirect to:
          // return '/unauthorized'
        }
      },
    },
  }
);

export { handler as GET, handler as POST };