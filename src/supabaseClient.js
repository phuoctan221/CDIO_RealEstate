import { createClient } from '@supabase/supabase-js'

// Dán URL bạn đã có và lấy Anon Key (Public) từ mục Settings > API trên Supabase
const supabaseUrl = 'https://bwefgpvgnnktcxgtalog.supabase.co'
const supabaseAnonKey = 'DÁN_ANON_KEY_CỦA_BẠN_VÀO_ĐÂY' 

export const supabase = createClient(supabaseUrl, supabaseAnonKey)