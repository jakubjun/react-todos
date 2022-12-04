import {Database} from "../../lib/database.types";
import supabase from "./supabase";

export async function getTodos() {
   return await supabase
        .from('todos')
        .select('*');
}


type TodosResponse = Awaited<ReturnType<typeof getTodos>>

export type TodosResponseSuccess = TodosResponse['data']

export type TodosResponseError = TodosResponse['error']

export type Todo = Database['public']['Tables']['todos']['Row']
