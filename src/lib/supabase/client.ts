import { createBrowserClient } from "@supabase/ssr";
// import { Database } from "../../../database.types";

export const createClient = () =>
  // TODO createBrowserClient<Database>(
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
