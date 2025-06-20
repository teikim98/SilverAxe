<template>
  <button
    class="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-md transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{ disabled?: boolean }>()
</script>
