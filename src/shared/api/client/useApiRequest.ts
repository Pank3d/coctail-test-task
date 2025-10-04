import { ref, type Ref } from "vue";
import { UseApiRequestReturn } from "@/shared";

export const useApiRequest = <T = any, D = any>(
  apiFn: (dto: D) => Promise<T>
): UseApiRequestReturn<T, D> => {
  const data = ref<T | null>(null) as Ref<T | null>;
  const loading = ref(false);
  const error = ref<string | null>(null);
  const status = ref<"idle" | "loading" | "success" | "error">("idle");
  const timestamp = ref<number | undefined>(undefined);

  let abortController: AbortController | null = null;

  const execute = async (dto: D) => {
    if (abortController) {
      abortController.abort();
    }

    abortController = new AbortController();
    loading.value = true;
    error.value = null;
    status.value = "loading";

    try {
      const result = await apiFn(dto);
      console.log('API Response:', result);

      if (!abortController.signal.aborted) {
        data.value = result
        status.value = "success";
        timestamp.value = Date.now();
      }
    } catch (err: unknown) {
      if (!abortController?.signal.aborted) {
        error.value =
          err instanceof Error ? err.message : "Unknown error occurred";
        status.value = "error";
      }
    } finally {
      if (!abortController?.signal.aborted) {
        loading.value = false;
      }
    }
  };

  const abort = () => {
    if (abortController) {
      abortController.abort();
      loading.value = false;
      status.value = "idle";
    }
  };

  return {
    data,
    state: {
      isLoading: loading,
      isError: error,
      timestamp,
    },
    loading,
    error,
    status,
    execute,
    abort,
  };
};
