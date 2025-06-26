
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import getUserByEmail from "./helper/getUserByEmail";

export const {
    auth,
    signIn,
    signOut

} = NextAuth({

    //auth-js session for credential provider
    session: {
        strategy: 'jwt',
        maxAge: 24 * 60 * 60,  // Session expires after 24 hours
    },

    //credential providers here
    providers: [
        Credentials({
            async authorize(credential) {
                if (!credential) return null;

                try {
                    const user = await getUserByEmail(credential?.email);

                    if (user) {
                        const isMatch = user?.password === credential?.password;

                        if (isMatch) {
                            if (user?.isvarified) {
                                return user;
                            } else {
                                throw new Error("You Should Verify your Account Fast");
                            }
                        } else {
                            throw new Error("There was a problem in your Password or Role");
                        }
                    } else {
                        throw new Error("User Not Found");
                    }
                } catch (err) {
                    throw new Error(err);
                }
            }
        })
    ],

    secret: process.env.NEXT_PUBLIC_AUTH_SECRECT,

    callbacks: {
        // JWT callback to add token expiration
        async jwt({ token, user }) {
            // Set expiration for 24 hours from the time of login
            if (user) {
                token.id = user.uid;
                token.email = user.email;
                token.role = user.role;
                token.name = user.fullname;

                // Set token expiry time (24 hours)
                const now = Math.floor(Date.now() / 1000); // current time in seconds
                token.exp = now + (24 * 60 * 60); // expiration after 24 hours
            }

            return token;
        },

        // Session callback to handle session based on JWT token
        async session({ session, token }) {
            // If token has expired, sign the user out automatically
            const now = Math.floor(Date.now() / 1000);

            if (token.exp && token.exp < now) {
                return null; // Invalid session
            }

            // Attach additional user details to the session object
            session.user = {
                id: token.id,
                email: token.email,
                role: token.role,
                name: token.name
            };

            return session;
        }
    }
});
