/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue", // Nuxt 3의 기본 app.vue 사용 시
      "./error.vue", // Nuxt 3의 기본 error.vue 사용 시
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
    