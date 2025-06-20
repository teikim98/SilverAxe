<template>
  <div>
    <h3 class="text-xl font-medium mb-3 text-green-400">선택된 노래 (최대 3곡)</h3>
    <div class="min-h-[80px] bg-slate-700/50 rounded-md p-4 border border-slate-600">
      <p v-if="songs.length === 0" class="text-slate-400 text-center py-6">선택한 노래가 여기에 표시됩니다.</p>
      <div
        v-for="song in songs"
        :key="song.id"
        class="p-2 my-1 bg-green-600/30 text-green-300 rounded flex justify-between"
      >
        <span>{{ song.title }} - {{ song.artist }}</span>
        <button class="text-red-400" @click="$emit('remove', song)">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
defineProps<{ songs: Song[] }>()
defineEmits<{ (e: 'remove', song: Song): void }>()
</script>
