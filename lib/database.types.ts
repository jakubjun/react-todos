export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      todos: {
        Row: {
          id: number
          created_at: string | null
          title: string | null
          user_id: string
        }
        Insert: {
          id?: number
          created_at?: string | null
          title?: string | null
          user_id: string
        }
        Update: {
          id?: number
          created_at?: string | null
          title?: string | null
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      install_available_extensions_and_test: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}

