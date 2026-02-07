import { createClient, SupabaseClient } from '@supabase/supabase-js';

export function getSafeSupabase(): SupabaseClient | null {
  try {
    const url = import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
    const key = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    if (!url || !key) return null;
    return createClient(url, key, { auth: { persistSession: false } });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('Supabase client not initialized:', e);
    return null;
  }
}

export const safeSupabase = getSafeSupabase();
