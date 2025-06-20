<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white p-4 sm:p-8">
    <div class="container mx-auto max-w-4xl">
      <!-- 헤더 -->
      <header class="mb-12 text-center">
        <h1 class="text-4xl sm:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-cyan-400 to-purple-500">
          AI 음악 추천
        </h1>
        <p class="text-slate-300 text-lg">
          좋아하는 노래 3곡을 선택하고 AI의 맞춤 추천을 받아보세요!
        </p>
      </header>

      <!-- 메인 콘텐츠 영역 -->
      <main class="space-y-10">
        <!-- 1. 노래 검색 및 선택 영역 -->
        <section class="bg-slate-800 shadow-xl rounded-lg p-6">
          <h2 class="text-2xl font-semibold mb-4 text-cyan-400 border-b-2 border-cyan-400/30 pb-2">
            1. 좋아하는 노래 선택하기
          </h2>
          <SongSearchForm @select="addSong" />
          <SelectedSongsList :songs="selectedSongs" @remove="removeSong" />
          <MoodSelector v-model="mood" />
        </section>

        <!-- 2. AI 추천 받기 버튼 -->
        <section class="text-center">
          <AppButton
            class="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105"
            :disabled="selectedSongs.length === 0"
            @click="fetchRecommendations"
          >
            AI 추천 받기 ✨
          </AppButton>
        </section>

        <!-- 3. 추천 결과 표시 영역 -->
        <section class="bg-slate-800 shadow-xl rounded-lg p-6">
          <RecommendationList :songs="recommendations" />
        </section>
      </main>

      <!-- 푸터 -->
      <footer class="mt-12 text-center text-slate-400 text-sm">
        <p>© {{ new Date().getFullYear() }} AI Music Recommender. Powered by Nuxt, Spotify & Gemini.</p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SongSearchForm from '~/components/SongSearchForm.vue'
import SelectedSongsList from '~/components/SelectedSongsList.vue'
import RecommendationList from '~/components/RecommendationList.vue'
import MoodSelector from '~/components/MoodSelector.vue'
import AppButton from '~/components/common/AppButton.vue'
import { useAppState } from '~/composables/useAppState'
import { useGemini } from '~/composables/useGemini'
import type { Song } from '~/types/song'

const { selectedSongs, recommendations } = useAppState()
const { getRecommendations } = useGemini()
const mood = ref('happy')

function addSong(song: Song) {
  if (selectedSongs.value.find((s) => s.id === song.id)) return
  if (selectedSongs.value.length >= 3) return
  selectedSongs.value.push(song)
}

function removeSong(song: Song) {
  selectedSongs.value = selectedSongs.value.filter((s) => s.id !== song.id)
}

async function fetchRecommendations() {
  recommendations.value = await getRecommendations(selectedSongs.value, mood.value)
}
</script>

<style scoped>
</style>
