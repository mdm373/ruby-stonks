import {useFetch} from '../wrappers'
import { SWRResponse} from "swr";
import {TodosResponse} from "./types";

export const useFetchTodos = ():  SWRResponse<TodosResponse> => {
    return useFetch<TodosResponse>('/api/stonks/todos');
}
