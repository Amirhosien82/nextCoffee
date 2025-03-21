import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { signUp } from "./_services/api_users";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ account, user }) {
      console.log(user);

      await signUp();
    },
    session({session}){}
  },
});
