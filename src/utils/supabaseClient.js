import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wxlmrtitzpcoqqkicsai.supabase.co"; 
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4bG1ydGl0enBjb3Fxa2ljc2FpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczODkyOTUzOSwiZXhwIjoyMDU0NTA1NTM5fQ.csCx5ePq7K-BI6U7oDyvs8vWtwqZGx1e3X-zOP5x0uw";

export const supabase = createClient(supabaseUrl, supabaseKey);
