<template>
  <div>
    <div class="mb-6">
      <input
        v-model="query"
        type="text"
        placeholder="아티스트나 노래 제목으로 검색하세요..."
        class="w-full p-3 rounded-md bg-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
      />
      <AppButton class="mt-2 w-full" @click="search">검색</AppButton>
    </div>
    <div class="mb-6 h-48 bg-slate-700/50 rounded-md p-4 overflow-y-auto border border-slate-600">
      <LoadingSpinner v-if="loading" />
      <template v-else>
        <p v-if="results.length === 0" class="text-slate-400 text-center py-16">검색 결과가 여기에 표시됩니다.</p>
        <SongSelectItem v-for="song in results" :key="song.id" :song="song" @select="onSelectSong" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SongSelectItem from './SongSelectItem.vue'
import LoadingSpinner from './common/LoadingSpinner.vue'
import AppButton from './common/AppButton.vue'
import { useSpotify } from '~/composables/useSpotify'
import type { Song } from '~/types/song'

const emit = defineEmits<{ (e: 'select', song: Song): void }>()
const { searchSongs } = useSpotify()
const query = ref('')
const results = ref<Song[]>([])
const loading = ref(false)

async function search() {
  loading.value = true
  try {
    results.value = await searchSongs(query.value)
  } finally {
    loading.value = false
  }
}

function onSelectSong(song: Song) {
  emit('select', song)
}
</script>
