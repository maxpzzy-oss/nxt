import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface TrialRequest {
  id?: string;
  full_name: string;
  email: string;
  package_type: string;
  discord_joined: boolean;
  created_at?: string;
  status?: string;
}

export interface BundleSelection {
  id?: string;
  internet_plan?: string;
  include_streaming: boolean;
  total_price: number;
  created_at?: string;
  user_email?: string;
}

export interface PlanRecommendation {
  id?: string;
  user_count: string;
  usage_type: string;
  recommended_plan: string;
  created_at?: string;
}
