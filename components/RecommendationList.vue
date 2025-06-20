<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4 text-purple-400 border-b-2 border-purple-400/30 pb-2">
      3. AI 추천 노래 ({{ songs.length }})
    </h2>
    <div class="min-h-[200px] bg-slate-700/50 rounded-md p-4 border border-slate-600">
      <p v-if="songs.length === 0" class="text-slate-400 text-center py-20">추천 결과가 여기에 표시됩니다.</p>
      <RecommendedSongItem v-for="song in songs" :key="song.id" :song="song" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
import RecommendedSongItem from './RecommendedSongItem.vue'

defineProps<{ songs: Song[] }>()
</script>
