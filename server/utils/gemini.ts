import type { Song } from '~/types/song'

export async function getRecommendations(_songs: Song[], _mood: string): Promise<Song[]> {
  return [
    { id: '101', title: 'Recommended 1', artist: 'Artist X', reason: '기존 곡과 분위기가 비슷해요' },
    { id: '102', title: 'Recommended 2', artist: 'Artist Y', reason: '비슷한 장르예요' },
    { id: '103', title: 'Recommended 3', artist: 'Artist Z', reason: '많은 사람이 함께 들었어요' },
  ]
}
