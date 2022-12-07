import supabase from './supabase';

export default async function logOut() {
  return supabase.auth.signOut();
}
