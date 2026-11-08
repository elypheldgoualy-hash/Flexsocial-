
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://jtvkjxzidtqaxvgchfxw.supabase.co";

// Remplacez ce texte par votre Publishable key
const SUPABASE_PUBLISHABLE_KEY = "COLLEZ_VOTRE_CLE_PUBLIQUE_ICI";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

window.supabaseClient = supabase;
