<script lang="ts" setup>
import { Link } from '@/shared'

interface SideBarItemProps {
  path: string
  title: string
  icon?: string
}

defineProps<SideBarItemProps>()
</script>

<template>
  <Link :to="path" :text="title" :icon="icon" class="sidebar-item" />
</template>

<style lang="scss" scoped>
@import '@/app/styles/mixins.scss';

.sidebar-item {
  @include flex-row(var(--spacing-sm));
  align-items: center;
  padding: 0.875rem var(--spacing-md);
  text-decoration: none;
  color: var(--color-text-muted);
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
  font-weight: var(--font-weight-medium);
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: var(--font-size-sm);
  }

  &:hover {
    background-color: var(--color-bg-lighter);
    color: var(--color-text-secondary);
  }

  &.is-active {
    background-color: #e0e7ff;
    color: var(--color-primary);
    font-weight: var(--font-weight-medium);
  }

  &__icon {
    font-size: var(--font-size-lg);
    line-height: 1;
  }

  &__title {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
  }
}
</style>
