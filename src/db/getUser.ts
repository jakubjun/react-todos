import supabase from "./supabase";

export async function getUser() {
  return await supabase.auth.getUser();

}

type UserResponse = Awaited<ReturnType<typeof getUser>>

export type UserResponseSuccess = UserResponse['data']

export type UserResponseError = UserResponse['error']
