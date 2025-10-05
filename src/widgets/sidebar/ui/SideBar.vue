<script lang="ts" setup>
import SideBarItem from './SideBarItem.vue'
import { sideBarConfig } from '../model/config'
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
      />
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
@use '@/shared/styles' as *;

.sidebar {
  @include flex-column;
  width: 16rem;
  min-height: 100vh;
  background-color: $color-white;
  border-right: 1px solid $color-border;
  box-shadow: $shadow-md;

  @include mobile {
    width: 100%;
    min-height: auto;
    flex-direction: row;
    border-right: none;
    border-bottom: 1px solid $color-border;
  }

  &__header {
    padding: $spacing-lg $spacing-md;
    border-bottom: 1px solid $color-border;

    @include mobile {
      padding: $spacing-md;
      border-bottom: none;
      border-right: 1px solid $color-border;
    }
  }

  &__title {
    @include font-xl;
    color: $color-text-primary;
    margin: 0;

    @include mobile {
      @include font-lg;
    }
  }

  &__nav {
    @include flex-column($spacing-xs);
    padding: $spacing-md;

    @include mobile {
      flex-direction: row;
      gap: $spacing-xs;
      padding: $spacing-md;
      overflow-x: auto;
    }
  }
}
</style>
