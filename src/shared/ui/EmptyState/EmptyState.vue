<script setup lang="ts">
import { EmptyStateProps } from './types'

defineProps<EmptyStateProps>()
</script>

<template>
  <div class="empty-state">
    <h2 class="empty-state__title">{{ title }}</h2>
    <p v-if="message" class="empty-state__message">{{ message }}</p>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.empty-state {
  text-align: center;
  padding: var(--spacing-2xl);
  color: var(--color-text-muted);

  &__title {
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-xs);
    color: var(--color-text-primary);
  }

  &__message {
    font-size: var(--font-size-base);
    color: var(--color-text-muted);
  }
}
</style>
