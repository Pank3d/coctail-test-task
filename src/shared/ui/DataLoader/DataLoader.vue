<script setup lang="ts">
import { DataLoaderProps } from './types'

withDefaults(defineProps<DataLoaderProps>(), {
  loadingText: 'Loading...',
  errorText: 'Error loading data',
})
</script>

<template>
  <div class="data-loader">
    <div v-if="isLoading" class="data-loader__loading">
      <p>{{ loadingText }}</p>
    </div>
    <div v-else-if="isError" class="data-loader__error">
      <p>{{ errorText }}</p>
      <button v-if="onRetry" class="data-loader__retry-btn" @click="onRetry">Retry</button>
    </div>
    <div v-else class="data-loader__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/shared/styles' as *;

.data-loader {
  &__loading,
  &__error {
    text-align: center;
    padding: $spacing-2xl;
    color: $color-text-muted;

    p {
      @include font-md;
    }
  }

  &__error {
    color: $color-error;
  }

  &__retry-btn {
    @include font-sm;
    margin-top: $spacing-md;
    padding: $spacing-sm $spacing-lg;
    background-color: $color-primary;
    color: $color-white;
    border: none;
    border-radius: $radius-sm;
    font-weight: $font-weight-medium;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: $color-primary-dark;
    }

    &:active {
      transform: scale(0.98);
    }
  }
}
</style>
