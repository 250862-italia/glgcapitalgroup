export interface User {
  id: string
  email: string
  first_name?: string
  last_name?: string
  role: "user" | "admin" | "superadmin"
  kyc_status: "pending" | "verified" | "rejected"
  is_active: boolean
  created_at: string
}
