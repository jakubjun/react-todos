import supabase from './supabase';

export async function removeTodo(todoId: number) {
  return supabase
    .from('todos')
    .delete()
    .eq('id', todoId);
}

type RemoveTodoResponse = Awaited<ReturnType<typeof removeTodo>>;

export type RemoveTodoResponseSuccess = RemoveTodoResponse['data'];

export type RemoveTodoResponseError = RemoveTodoResponse['error'];
