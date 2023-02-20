import NextAuth, {AuthOptions} from "next-auth"
import GithubProvider from "next-auth/providers/github"


const requiredConfig = (key: string, value: string|undefined): string => {
    if (!value ){
        throw `${key} not configured`
    }
    return value
}

export const authOptions: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: requiredConfig('GITHUB_CLIENT_ID', process.env.GITHUB_CLIENT_ID),
            clientSecret: requiredConfig('GITHUB_CLIENT_SECRET', process.env.GITHUB_CLIENT_SECRET),
        }),
    ],
    secret: requiredConfig('JWT_AUTH_SECRET', process.env.JWT_AUTH_SECRET),
    session : {
        maxAge: 7 * (24*60*60), // count * day,
        strategy: "jwt"
    },
}

export default NextAuth(authOptions)