import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

export const getListItems = () => {
  return supabase
    .from('list_items')
    .select(`
      id,
      list_id,
      created_at,
      game_status (
        games (
          name,
          thumbnail
        ),
        is_done
      )
    `)
    .order('game_status(is_done)', { ascending: true })
}

export const getLists = () => {
  return supabase
    .from('lists')
    .select('*')
}