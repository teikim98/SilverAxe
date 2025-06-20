<template>
  <div class="p-2 my-1 bg-slate-600 rounded hover:bg-slate-500 cursor-pointer" @click="select">
    {{ song.title }} - {{ song.artist }}
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/types/song'
const props = defineProps<{ song: Song }>()
const emit = defineEmits<{ (e: 'select', song: Song): void }>()
function select() {
  emit('select', props.song)
}
</script>
