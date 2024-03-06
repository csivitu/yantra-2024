import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./prisma";

type Profile = {
	email?: string;
};

type Account = {
	provider: string;
};

export const authOptions: NextAuthOptions = {
	pages: {
		signIn: "/login", 
	},
	session: {
		strategy: "jwt", 
	},
	secret: process.env.NEXTAUTH_SECRET,

	callbacks: {
		signIn({
			account,
			profile,
		}: {
			account: Account | null;
			profile?: Profile;
		}) {
			if (account && account.provider === "google" && profile?.email) {
				const result: string | boolean =
					profile.email.endsWith("@vitstudent.ac.in");
				return Promise.resolve(result);
			}
			return Promise.resolve(false);
		},
	},

	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			authorization:
				"https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code&hd=vitstudent.ac.in",
		}),
	],
};