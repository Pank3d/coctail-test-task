<script lang="ts" setup>
import { Link } from '@/shared'
import { SideBarItemProps } from '@/widgets'

defineProps<SideBarItemProps>()
</script>

<template>
  <Link :to="path" :text="title" class="sidebar-item" />
</template>

<style lang="scss" scoped>
@use '@/shared/styles' as *;

.sidebar-item {
  @include flex-row($spacing-sm);
  align-items: center;
  padding: 0.875rem $spacing-md;
  text-decoration: none;
  color: $color-text-muted;
  border-radius: $radius-sm;
  transition: all 0.2s ease;
  font-weight: $font-weight-medium;
  white-space: nowrap;

  @include mobile {
    padding: $spacing-sm $spacing-md;
    @include font-sm;
  }

  &:hover {
    background-color: $color-bg-lighter;
    color: $color-text-secondary;
  }

  &.is-active {
    background-color: #e0e7ff;
    color: $color-primary;
    font-weight: $font-weight-medium;
  }

  &__title {
    @include font-sm;
    color: $color-text-secondary;
  }
}
</style>
