<script setup lang="ts">
import { RouterView } from 'vue-router'
import { SideBar } from '@/widgets'
</script>

<template>
  <main class="main-layout">
    <SideBar />
    <section class="main-layout__content">
      <router-view />
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use '@/shared/styles' as *;

.main-layout {
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;

  @include mobile {
    flex-direction: column;
  }
}

.main-layout__content {
  flex: 1;
  padding: $spacing-xl;
  overflow-y: auto;

  @include mobile {
    padding: $spacing-md;
  }
}
</style>
