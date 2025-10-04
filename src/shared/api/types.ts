import { Ref } from "vue";

export interface UseApiRequestReturn<T, D> {
  data: Ref<T | null>;
  state: {
    isLoading: Ref<boolean>;
    isError: Ref<string | null>;
    timestamp?: Ref<number | undefined>;
  };
  loading: Ref<boolean>;
  error: Ref<string | null>;
  status: Ref<"idle" | "loading" | "success" | "error">;
  execute: (dto: D) => Promise<void>;
  abort: () => void;
}
