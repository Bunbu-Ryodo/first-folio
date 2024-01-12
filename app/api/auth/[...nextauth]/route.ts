import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { z } from "zod";
import { getUser } from "@/app/lib/actions";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(8) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          if (user) {
            const passwordCorrect = await bcrypt.compare(
              password,
              user.password
            );
            if (passwordCorrect) {
              return {
                id: user.id,
                email: user.email,
              };
            } else {
              return null;
            }
          }
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
