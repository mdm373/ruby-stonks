import useSWR from 'swr'

// @ts-ignore
const fetcher = (...args: any[]) => fetch(...args).then(res => res.json())

export const useFetch= (...args: any[]) => {
    const { data, error, isLoading } = useSWR('/api/user/123', fetcher)
}