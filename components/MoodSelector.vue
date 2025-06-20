<template>
  <div class="mb-6">
    <label class="block text-slate-300 mb-1">현재 기분</label>
    <select v-model="model" class="w-full p-2 rounded-md bg-slate-700 text-white">
      <option value="happy">신남</option>
      <option value="sad">슬픔</option>
      <option value="relax">편안</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>()
</script>
