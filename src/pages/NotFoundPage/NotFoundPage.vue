<script setup lang="ts">
import { useRouter } from "vue-router";
import { routesPath } from "@/app/providers/router/routes";
import { useCountdown } from "@/shared";

const router = useRouter();
const { countdown } = useCountdown(3, async () => {
  try {
    await router.push(routesPath.drinks.tabs.margarita);
  } catch (error) {
    console.error("Failed to redirect from 404 page:", error);
  }
});
</script>

<template>
  <div class="not-found">
    <div class="not-found__content">
      <h1 class="not-found__title">404</h1>
      <h2 class="not-found__subtitle">Page Not Found</h2>
      <p class="not-found__message">
        The page you are looking for does not exist.
      </p>
      <p class="not-found__redirect">
        Redirecting to home in
        <span class="not-found__countdown">{{ countdown }}</span> seconds...
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/app/styles/mixins.scss";

.not-found {
  @include flex-center;
  min-height: 100vh;
  padding: var(--spacing-xl);

  &__content {
    text-align: center;
    max-width: 600px;
  }

  &__title {
    font-size: 8rem;
    font-weight: var(--font-weight-bold);
    color: var(--color-primary);
    margin: 0;
    line-height: 1;
  }

  &__subtitle {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-primary);
    margin: var(--spacing-md) 0;
  }

  &__message {
    font-size: var(--font-size-md);
    color: var(--color-text-muted);
    margin: var(--spacing-md) 0 var(--spacing-xl);
  }

  &__redirect {
    font-size: var(--font-size-base);
    color: var(--color-text-secondary);
  }

  &__countdown {
    font-weight: var(--font-weight-bold);
    color: var(--color-primary);
  }
}
</style>
