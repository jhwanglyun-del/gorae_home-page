import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://wjtdufqjivcdwrpwcrph.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqdGR1ZnFqaXZjZHdycHdjcnBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0MjYwNDYsImV4cCI6MjEwMjAwMjA0Nn0._138HShkvwWwW88c9raXMDw2uZOqjBtjYwWfBnLbe7o';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
