import { searchSongs } from '../utils/spotify'

export default defineEventHandler(async (event) => {
  const q = getQuery(event).q as string | undefined
  return await searchSongs(q || '')
})
