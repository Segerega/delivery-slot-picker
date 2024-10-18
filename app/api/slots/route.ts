import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                // Logic to find and validate user
            }
        }),
    ],
    session: {
        jwt: true,
    },
    callbacks: {
        async jwt(token, user) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
    },
});
