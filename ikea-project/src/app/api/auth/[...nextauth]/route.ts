import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { prisma } from "../../../../../prisma/prisma-client";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    // ...add more providers here
  ],
  adapter: PrismaAdapter(prisma),
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
