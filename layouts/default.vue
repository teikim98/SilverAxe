<template>
    <div>
      <!-- 
        여기에 모든 페이지에 공통으로 표시될 헤더나 네비게이션 바 등을 추가할 수 있습니다.
        지금은 pages/index.vue에서 대부분의 UI를 처리하고 있으므로,
        default.vue는 페이지 컨텐츠를 표시하는 <slot />만 가질 수도 있습니다.
        또는, pages/index.vue의 헤더/푸터를 이곳으로 옮겨올 수도 있습니다.
      -->
  
      <!-- 페이지 콘텐츠가 렌더링될 부분 -->
      <slot />
  
      <!-- 
        여기에 모든 페이지에 공통으로 표시될 푸터 등을 추가할 수 있습니다.
      -->
    </div>
  </template>
  
  <script setup lang="ts">
  // 레이아웃 레벨에서 필요한 스크립트 로직 (예: 전역 네비게이션 상태 관리 등)
  </script>
  
  <style scoped>
  /* 이 레이아웃에만 적용될 스타일 */
  </style>
  