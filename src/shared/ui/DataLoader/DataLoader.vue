<script setup lang="ts">
interface DataLoaderProps {
  isLoading: boolean;
  isError: boolean;
  loadingText?: string;
  errorText?: string;
}

withDefaults(defineProps<DataLoaderProps>(), {
  loadingText: "Loading...",
  errorText: "Error loading data",
});
</script>

<template>
  <div class="data-loader">
    <div v-if="isLoading" class="data-loader__loading">
      <p>{{ loadingText }}</p>
    </div>
    <div v-else-if="isError" class="data-loader__error">
      <p>{{ errorText }}</p>
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
    padding: 3rem;
    color: #64748b;

    p {
      font-size: 1.125rem;
    }
  }

  &__error {
    color: #ef4444;
  }
}
</style>
