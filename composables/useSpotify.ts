import type { Song } from '~/types/song'

export const useSpotify = () => {
  const searchSongs = async (query: string) => {
    return await $fetch<Song[]>('/api/search-songs', { params: { q: query } })
  }
  return { searchSongs }
}
