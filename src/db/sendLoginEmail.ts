import supabase from './supabase';

export default async function sendLoginEmail(email: string) {
  return supabase.auth.signInWithOtp({
    email,
  });
}
