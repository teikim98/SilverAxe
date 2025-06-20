import { getRecommendations } from '../utils/gemini'
import type { Song } from '~/types/song'

export default defineEventHandler(async (event) => {
  const body = await readBody<{ songs: Song[]; mood: string }>(event)
  return await getRecommendations(body.songs, body.mood)
})
