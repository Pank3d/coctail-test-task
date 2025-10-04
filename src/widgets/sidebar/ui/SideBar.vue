<script lang="ts" setup>
import SideBarItem from "./SideBarItem.vue";
import { sideBarConfig } from "../lib/config/sidebarConfig";
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
@import "@/app/styles/mixins.scss";

.sidebar {
  @include flex-column;
  width: 16rem;
  min-height: 100vh;
  background-color: var(--color-white);
  border-right: 1px solid var(--color-border);
  box-shadow: var(--shadow-md);

  &__header {
    padding: var(--spacing-lg) var(--spacing-md);
    border-bottom: 1px solid var(--color-border);
  }

  &__title {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-primary);
    margin: 0;
  }

  &__nav {
    @include flex-column(var(--spacing-xs));
    padding: var(--spacing-md);
  }
}
</style>
