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
            <!-- 노래 검색 폼 (나중에 Component로 분리) -->
            <div class="mb-6">
              <input
                type="text"
                placeholder="아티스트나 노래 제목으로 검색하세요..."
                class="w-full p-3 rounded-md bg-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              />
              <!-- 검색 버튼 (임시) -->
              <button class="mt-2 w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-md transition duration-150">
                검색
              </button>
            </div>
  
            <!-- 검색 결과 (임시) -->
            <div class="mb-6 h-48 bg-slate-700/50 rounded-md p-4 overflow-y-auto border border-slate-600">
              <p class="text-slate-400 text-center py-16">검색 결과가 여기에 표시됩니다.</p>
              <!-- 예시: SongSelectItem 컴포넌트가 들어갈 자리 -->
              <!-- <div class="p-2 my-1 bg-slate-600 rounded hover:bg-slate-500 cursor-pointer">노래 1 - 아티스트 1</div> -->
            </div>
  
            <!-- 선택된 노래 목록 (나중에 Component로 분리) -->
            <div>
              <h3 class="text-xl font-medium mb-3 text-green-400">선택된 노래 (최대 3곡)</h3>
              <div class="min-h-[80px] bg-slate-700/50 rounded-md p-4 border border-slate-600">
                <p class="text-slate-400 text-center py-6">선택한 노래가 여기에 표시됩니다.</p>
                <!-- 예시: 선택된 노래 아이템이 들어갈 자리 -->
                <!-- <div class="p-2 my-1 bg-green-600/30 text-green-300 rounded">선택된 노래 1</div> -->
              </div>
            </div>
          </section>
  
          <!-- 2. AI 추천 받기 버튼 (선택된 노래가 있을 때 활성화) -->
          <section class="text-center">
            <button
              class="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="true"
            >
              AI 추천 받기 ✨
            </button>
          </section>
  
          <!-- 3. 추천 결과 표시 영역 -->
          <section class="bg-slate-800 shadow-xl rounded-lg p-6">
            <h2 class="text-2xl font-semibold mb-4 text-purple-400 border-b-2 border-purple-400/30 pb-2">
              3. AI 추천 노래 (10곡)
            </h2>
            <div class="min-h-[200px] bg-slate-700/50 rounded-md p-4 border border-slate-600">
              <p class="text-slate-400 text-center py-20">추천 결과가 여기에 표시됩니다.</p>
              <!-- 예시: RecommendedSongItem 컴포넌트가 들어갈 자리 -->
              <!-- <div class="p-3 my-2 bg-slate-600 rounded">추천곡 1 - 아티스트 A <span class="text-xs text-slate-400 ml-2">(이유: 멜로디가 비슷해요)</span></div> -->
            </div>
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
  // 페이지 로직은 여기에 작성합니다.
  // 지금은 UI 구조만 잡는 단계이므로 비워둡니다.
  </script>
  
  <style scoped>
  /* scoped 스타일이 필요하면 여기에 작성합니다. 
     Tailwind를 주로 사용하므로 필수는 아닙니다. */
  </style>