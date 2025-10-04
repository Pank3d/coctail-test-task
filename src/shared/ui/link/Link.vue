<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import type { ILinkProps } from "./types";

const route = useRoute();

const props = withDefaults(defineProps<ILinkProps>(), {
  variant: "primary",
  size: "md",
  disabled: false,
  underline: true,
  activeClass: "link--active",
  exactActiveClass: "link--exact-active",
});

const isActive = computed(() => {
  if (typeof props.to === "string") {
    return route.path === props.to;
  }

  if (props.to && typeof props.to === "object") {
    if ("path" in props.to && props.to.path) {
      return route.path === props.to.path;
    }
    if ("name" in props.to && props.to.name) {
      return route.name === props.to.name;
    }
  }

  return false;
});
</script>

<template>
  <router-link
    v-bind="props"
    :class="{
      'is-active': isActive,
      'link--disabled': props.disabled,
    }"
  >
    <span v-if="icon" class="link__icon">{{ icon }}</span>
    <slot></slot>
  </router-link>
</template>

<style lang="scss" scoped>
.is-active {
  color: red;
  font-weight: bold;
}

.link--disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}
</style>
