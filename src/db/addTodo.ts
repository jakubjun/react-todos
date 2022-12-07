import supabase from './supabase';

export default async function addTodo(title: string, userId?: string) {
  if (!userId) {
    return { data: null, error: null };
  }
  return supabase
    .from('todos')
    .insert([
      { user_id: userId, title },
    ]).select('*');
}
