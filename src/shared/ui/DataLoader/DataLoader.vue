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
.data-loader {
  &__loading,
  &__error {
    text-align: center;
    padding: var(--spacing-2xl);
    color: var(--color-text-muted);

    p {
      font-size: var(--font-size-md);
    }
  }

  &__error {
    color: var(--color-error);
  }

  &__retry-btn {
    margin-top: var(--spacing-md);
    padding: var(--spacing-sm) var(--spacing-lg);
    background-color: var(--color-primary);
    color: var(--color-white);
    border: none;
    border-radius: var(--radius-sm);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: var(--color-primary-dark);
    }

    &:active {
      transform: scale(0.98);
    }
  }
}
</style>
