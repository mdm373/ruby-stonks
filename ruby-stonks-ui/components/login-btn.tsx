import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginBtn() {
    const { data: session } = useSession()
    if (!session || !session.user) {
        return (<>Not signed in<br/><button onClick={() => signIn()}>Sign in</button></>)
    }
    return (
        <>Signed in as {session.user.email} <br /><button onClick={() => signOut()}>Sign out</button></>
    )
}