import {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";
import { authOptions } from "../auth/[...nextauth]"


const getApiHost = () => process.env.STONKS_CLIENT_HOST
const getApiClientId = () => process.env.STONKS_CLIENT_ID
const getApiClientSecret = () => process.env.STONKS_CLIENT_SECRET

//TODO: Add caching
const getAccessToken = async () => {
    const resp = await fetch(`${getApiHost()}/oauth/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: Object.entries({
            grant_type: 'client_credentials',
            scope: 'read write',
            client_id: getApiClientId(),
            client_secret: getApiClientSecret(),
        }).map( ([key, value]) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(value || '')}`
        ).join('&')
    })
    return (await resp.json()).access_token
}

const getAuthorizationHeader = async () => {
    return {Authorization: `Bearer ${await getAccessToken()}`}
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions)
    if (!session){
        return res.status(401).json({message: 'not authorized'})
    }

    const path = req.url?.replace('/api/stonks/', '')
    const stonksResp = await fetch(`${getApiHost()}/${path}`, {
        headers: {...(await getAuthorizationHeader())},
        method: req.method,

    })
    const data = await stonksResp.json()
    return res.status(stonksResp.status).json(data)
}
