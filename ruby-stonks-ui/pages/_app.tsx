import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import {useFetchTodos} from "../services/fetch";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
    const {data, error, isLoading} = useFetchTodos()
    return (<>
        <div>
            {JSON.stringify(data)}
        </div>
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    </>)
}