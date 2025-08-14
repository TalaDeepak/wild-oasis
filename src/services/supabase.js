import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://eygrosscxitesyobnacg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5Z3Jvc3NjeGl0ZXN5b2JuYWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzNTc5MTIsImV4cCI6MjA2NzkzMzkxMn0.RjN-XTsZWKVsESIukhVfBewRaTsUJaxpFwsy9WuBr20";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
