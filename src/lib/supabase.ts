import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for TypeScript
export interface CallbackRequest {
  id?: string
  name: string
  phone: string
  preferred_time: string
  message: string
  submitted_at?: string
  status: 'new' | 'contacted' | 'enrolled' | 'not_interested'
}

export interface CallbackRequestResponse {
  status: 'success' | 'error'
  message: string
  data?: CallbackRequest
  error?: string
}
