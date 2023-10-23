import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vtlfbnsuhyefvmpxhyip.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0bGZibnN1aHllZnZtcHhoeWlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3MjUzMDUsImV4cCI6MjAxMzMwMTMwNX0._JIDCLwcTCOQNG-65o_GlvLwxSlRQUHJTYjsP1-uyyE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
