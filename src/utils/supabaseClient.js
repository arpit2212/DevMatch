import { createClient } from "@supabase/supabase-js";
import { configDotenv } from "dotenv";
const supabaseUrl = process.env.supabaseUrl
const supabaseKey = process.env.supabaseKey

export const supabase = createClient(supabaseUrl, supabaseKey);
