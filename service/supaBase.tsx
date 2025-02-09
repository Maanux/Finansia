import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://egkytfkfqeccqrlpisaj.supabase.co";

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVna3l0ZmtmcWVjY3FybHBpc2FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwNzM3NjcsImV4cCI6MjA1MzY0OTc2N30.kv2vywYOVrUcZFAUTIoBzaER3WAwwN6ZrbR_IKw7CJY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
