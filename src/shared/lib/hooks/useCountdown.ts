import { ref, onMounted, onUnmounted } from "vue";

export const useCountdown = (initialSeconds: number, onComplete?: () => void) => {
  const countdown = ref(initialSeconds);
  let interval: ReturnType<typeof setInterval> | null = null;

  const start = () => {
    interval = setInterval(() => {
      countdown.value--;
      if (countdown.value <= 0) {
        stop();
        try {
          onComplete?.();
        } catch (error) {
          console.error("Error in countdown callback:", error);
        }
      }
    }, 1000);
  };

  const stop = () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  };

  const reset = () => {
    stop();
    countdown.value = initialSeconds;
  };

  onMounted(() => {
    start();
  });

  onUnmounted(() => {
    stop();
  });

  return {
    countdown,
    start,
    stop,
    reset,
  };
};
