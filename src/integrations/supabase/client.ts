// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://meudvpiancvefgkfbujg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ldWR2cGlhbmN2ZWZna2ZidWpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3MjM1ODgsImV4cCI6MjA1MDI5OTU4OH0.Orwn1NutU81q0XFWSRa2EEbHHv9eNCyd-w0iIMqCzDI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);