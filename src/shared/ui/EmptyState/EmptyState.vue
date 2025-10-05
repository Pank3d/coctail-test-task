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
@use '@/shared/styles' as *;

.empty-state {
  text-align: center;
  padding: $spacing-2xl;
  color: $color-text-muted;

  &__title {
    @include font-xl;
    margin-bottom: $spacing-xs;
    color: $color-text-primary;
  }

  &__message {
    @include font-base;
    color: $color-text-muted;
  }
}
</style>
