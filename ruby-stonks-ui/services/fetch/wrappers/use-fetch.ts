import useSWR from 'swr'

// @ts-ignore
const fetcher = (...args: any[]) => fetch(...args).then(res => res.json())

export const useFetch = <T>(...args: any[]) => useSWR<T>(args, fetcher)