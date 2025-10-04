<script lang="ts" setup>
import { computed, onMounted, onUnmounted, Ref } from "vue";

interface ActionState {
  isLoading: Ref<boolean>;
  isError: Ref<string | null>;
  timestamp?: Ref<number | undefined>;
}

interface ActionItem {
  execute: (param?: any) => Promise<void>;
  state: ActionState;
  param?: any;
}

interface DataLoaderProps {
  actions: ActionItem | ActionItem[];
  height?: number;
  alwaysShowLoader?: boolean;
  noDelay?: boolean;
  refetchPeriod?: number;
  loadingText?: string;
  errorText?: string;
}

const props = withDefaults(defineProps<DataLoaderProps>(), {
  loadingText: "Загрузка...",
  errorText: "Произошла ошибка",
  noDelay: false,
});

const actionsArray = computed(() =>
  Array.isArray(props.actions) ? props.actions : [props.actions]
);

const filteredActions = computed(() => {
  return actionsArray.value.filter((action) => {
    if (!action?.state) return false;
    const { state } = action;
    if (state.isLoading.value) return false;
    if (props.noDelay) return true;
    if (!state.timestamp || !state.timestamp.value) return true;
    return Date.now() - state.timestamp.value > 3000;
  });
});

const fetchActions = () => {
  filteredActions.value.forEach((action) => {
    action.execute(action.param);
  });
};

let intervalId: ReturnType<typeof setInterval> | null = null;

const fetchActionsInterval = () => {
  fetchActions();
  if (props.refetchPeriod) {
    intervalId = setInterval(() => {
      fetchActions();
    }, props.refetchPeriod * 1000);
  }
};

onMounted(() => {
  fetchActionsInterval();
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});

const isLoading = computed(() =>
  actionsArray.value.some((action) => action.state.isLoading && action.state.isLoading.value)
);

const isError = computed(() =>
  actionsArray?.value.some((action) => action.state.isError && !!action.state.isError.value)
);
</script>

<template>
  <div
    class="data-loader"
    :style="{ minHeight: height ? `${height}px` : undefined }"
  >
    <div v-if="isLoading && alwaysShowLoader" class="data-loader__loading">
      <p class="loading-text">{{ loadingText }}</p>
    </div>
    <div v-else-if="isError" class="data-loader__error">
      <p class="error-text">{{ errorText }}</p>
    </div>
    <div v-else class="data-loader__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.data-loader-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
