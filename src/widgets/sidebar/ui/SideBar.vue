<script lang="ts" setup>
import SideBarItem from "./SideBarItem.vue";
import { sideBarConfig } from "../../sidebar";
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__header">
      <h2 class="sidebar__title">Cocktails</h2>
    </div>
    <nav class="sidebar__nav">
      <SideBarItem
        v-for="item in sideBarConfig"
        :key="item.path"
        :path="item.path"
        :title="item.title"
        :icon="item.icon"
      />
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 16rem;
  min-height: 100vh;
  background-color: #ffffff;
  border-right: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

  &__header {
    padding: 1.5rem 1rem;
    border-bottom: 1px solid #e2e8f0;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    margin: 0;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }
}
</style>
