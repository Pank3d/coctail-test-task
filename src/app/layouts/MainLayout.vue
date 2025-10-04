<script setup lang="ts">
import { SideBar } from "@/widgets";
import { useRoute } from "vue-router";

const route = useRoute();
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
.main-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.main-layout__content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}
</style>
