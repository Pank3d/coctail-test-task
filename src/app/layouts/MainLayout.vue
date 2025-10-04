<script setup lang="ts">
import { SideBar } from "@/widgets";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="main-layout">
    <SideBar />
    <main class="main-layout__content">
      <router-view :key="route.path" />
    </main>
  </div>
</template>

<style scoped>
.main-layout {
  display: flex;
  min-height: 100vh;
}

.main-layout__content {
  flex: 1;
  padding: 2rem;
}
</style>
