import type { Song } from '~/types/song'

const DUMMY_SONGS: Song[] = [
  { id: '1', title: 'Song One', artist: 'Artist A' },
  { id: '2', title: 'Another Song', artist: 'Artist B' },
  { id: '3', title: 'Cool Track', artist: 'Artist C' },
  { id: '4', title: 'Best Hit', artist: 'Artist D' },
  { id: '5', title: 'Chill Vibes', artist: 'Artist E' },
]

export async function searchSongs(query: string): Promise<Song[]> {
  if (!query) return DUMMY_SONGS
  const q = query.toLowerCase()
  return DUMMY_SONGS.filter(
    (s) => s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q)
  )
}
