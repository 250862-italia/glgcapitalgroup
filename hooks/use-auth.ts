"use client"
import { useState } from "react"
import { signInWithEmail } from "@/lib/supabase"
import type { User } from "@/types/user"

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    setError(null)
    try {
      const { user } = await signInWithEmail(email, password)
      setUser(user)
      return { success: true }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Sign in failed"
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  const signOut = () => {
    setUser(null)
    setError(null)
  }

  return { user, loading, error, signIn, signOut, isAuthenticated: !!user }
}
