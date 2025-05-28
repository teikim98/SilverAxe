// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'], // CSS 파일 경로
  postcss: { // 이 부분을 추가하거나 확인합니다.
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    // 서버 사이드에서만 접근 가능 (브라우저에 노출 안 됨)
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    geminiApiKey: process.env.GEMINI_API_KEY,
    // public은 브라우저에서도 접근 가능
    public: {
      // 예: publicApiBase: '/api'
    }
  }
})
