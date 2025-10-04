<script setup lang="ts">
import { computed } from "vue";

interface LazyImageProps {
  src: string;
  alt: string;
  preview?: boolean;
}

const props = withDefaults(defineProps<LazyImageProps>(), {
  preview: false,
});

const optimizedSrc = computed(() => {
  if (props.preview && props.src.includes("thecocktaildb.com")) {
    return props.src.replace("/media/drink/", "/media/drink/preview/");
  }
  return props.src;
});
</script>

<template>
  <div class="lazy-image">
    <img
      v-lazy="optimizedSrc"
      :alt="alt"
      class="lazy-image__img"
    />
  </div>
</template>

<style scoped lang="scss">
.lazy-image {
  width: 100%;
  height: 100%;
  position: relative;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-md);
  }
}
</style>
