import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: "/",
    error: "/",
  },
  callbacks: {
    async signIn({ user }) {
      if (user.email == "mdshahriyaralam552@gmail.com") {
        return true;
      } else {
        return false;
      }
    },
    async session({ session, token }) {
      return session;
    },
  },
});
