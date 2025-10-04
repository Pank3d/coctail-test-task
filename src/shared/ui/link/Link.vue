<script lang="ts" setup>
import { RouterLink, useRouter } from 'vue-router'
import type { ILinkProps } from './types'

const router = useRouter()
const props = withDefaults(defineProps<ILinkProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  underline: true,
  activeClass: 'link--active',
  exactActiveClass: 'link--exact-active',
})
</script>

<template>
  <router-link v-slot="{ isActive }" v-bind="props" custom>
    <a
      :href="typeof to === 'string' ? to : undefined"
      :class="{
        'is-active': isActive,
        'link--disabled': props.disabled,
      }"
      @click.prevent="!props.disabled && router.push(to)"
    >
      <span v-if="icon" class="link__icon">{{ icon }}</span>
      <slot>{{ text }}</slot>
    </a>
  </router-link>
</template>

<style lang="scss" scoped>
.link--disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}
</style>
