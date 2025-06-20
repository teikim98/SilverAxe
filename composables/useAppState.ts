import type { Song } from '~/types/song'

export const useAppState = () => {
  const selectedSongs = useState<Song[]>('selectedSongs', () => [])
  const recommendations = useState<Song[]>('recommendations', () => [])
  return { selectedSongs, recommendations }
}
