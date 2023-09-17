import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tnnjfvijqlxxeiwfnuav.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRubmpmdmlqcWx4eGVpd2ZudWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2Mjg3NzgsImV4cCI6MjAwODIwNDc3OH0.6qtSinvqdntpvXWNp-BAjErd0sdcK96IIzVIKOXdocA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
