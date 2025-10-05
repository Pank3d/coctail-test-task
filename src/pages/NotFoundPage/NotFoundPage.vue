<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCountdown } from '@/shared'
import { getDefaultCocktail } from '@/widgets/sidebar/model/config'

const router = useRouter()
const { countdown } = useCountdown(3, async () => {
  try {
    await router.push(getDefaultCocktail().path)
  } catch {
    throw new Error()
  }
})
</script>

<template>
  <div class="not-found">
    <div class="not-found__content">
      <h1 class="not-found__title">404</h1>
      <h2 class="not-found__subtitle">Page Not Found</h2>
      <p class="not-found__message">The page you are looking for does not exist.</p>
      <p class="not-found__redirect">
        Redirecting to home in
        <span class="not-found__countdown">{{ countdown }}</span> seconds...
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/shared/styles' as *;

.not-found {
  @include flex-center;
  min-height: 100vh;
  padding: $spacing-xl;

  &__content {
    text-align: center;
    max-width: 600px;
  }

  &__title {
    font-size: 8rem;
    font-weight: $font-weight-bold;
    color: $color-primary;
    margin: 0;
    line-height: 1;
  }

  &__subtitle {
    font-size: var(--font-size-2xl);
    font-weight: $font-weight-medium;
    color: $color-text-primary;
    margin: $spacing-md 0;
  }

  &__message {
    font-size: var(--font-size-md);
    color: $color-text-muted;
    margin: $spacing-md 0 $spacing-xl;
  }

  &__redirect {
    font-size: var(--font-size-base);
    color: $color-text-secondary;
  }

  &__countdown {
    font-weight: $font-weight-bold;
    color: $color-primary;
  }
}
</style>
