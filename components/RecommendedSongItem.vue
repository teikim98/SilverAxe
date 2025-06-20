<template>
  <div class="p-3 my-2 bg-slate-600 rounded">
    {{ song.title }} - {{ song.artist }}
    <span v-if="song.reason" class="text-xs text-slate-400 ml-2">({{ song.reason }})</span>
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'

defineProps<{ song: Song }>()
</script>
