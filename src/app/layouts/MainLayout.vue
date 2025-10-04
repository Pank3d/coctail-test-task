<script setup lang="ts">
import { useRoute, RouterView } from 'vue-router'
import { SideBar } from '@/widgets'

const route = useRoute()
</script>

<template>
  <main class="main-layout">
    <SideBar />
    <section class="main-layout__content">
      <router-view :key="route.path" />
    </section>
  </main>
</template>

<style scoped>
@import '@/app/styles/mixins.scss';

.main-layout {
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.main-layout__content {
  flex: 1;
  padding: var(--spacing-xl);
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }
}
</style>
