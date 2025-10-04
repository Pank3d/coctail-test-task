<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { routesPath } from "@/app/providers/router/routes";

const router = useRouter();
const countdown = ref(3);

onMounted(() => {
  const interval = setInterval(() => {
    countdown.value--;
    if (countdown.value === 0) {
      clearInterval(interval);
      router.push(routesPath.drinks.tabs.maragarita);
    }
  }, 1000);
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
        Redirecting to home in <span class="not-found__countdown">{{ countdown }}</span> seconds...
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;

  &__content {
    text-align: center;
    max-width: 600px;
  }

  &__title {
    font-size: 8rem;
    font-weight: 700;
    color: #4f46e5;
    margin: 0;
    line-height: 1;
  }

  &__subtitle {
    font-size: 2rem;
    font-weight: 600;
    color: #1e293b;
    margin: 1rem 0;
  }

  &__message {
    font-size: 1.125rem;
    color: #64748b;
    margin: 1rem 0 2rem;
  }

  &__redirect {
    font-size: 1rem;
    color: #475569;
  }

  &__countdown {
    font-weight: 700;
    color: #4f46e5;
  }
}
</style>
