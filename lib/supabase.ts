import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ntzmajcjbvgfoeirqkjo.supabase.co";
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50em1hamNqYnZnZm9laXJxa2pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwOTgzODgsImV4cCI6MjA0NDY3NDM4OH0.CvDmDeWw0gL_ohI1audlWZV2SscpxjwFoAK3umF5YZU"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})