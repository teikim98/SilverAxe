import type { Song } from '~/types/song'

export const useGemini = () => {
  const getRecommendations = async (songs: Song[], mood: string) => {
    return await $fetch<Song[]>('/api/get-recommendations', {
      method: 'POST',
      body: { songs, mood },
    })
  }
  return { getRecommendations }
}
