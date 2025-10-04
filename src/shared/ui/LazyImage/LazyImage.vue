<script setup lang="ts">
import { ref, computed } from "vue";

interface LazyImageProps {
  src: string;
  alt: string;
  preview?: boolean;
}

const props = withDefaults(defineProps<LazyImageProps>(), {
  preview: false,
});

const imageLoaded = ref(false);
const imageError = ref(false);

const optimizedSrc = computed(() => {
  if (props.preview && props.src.includes("thecocktaildb.com")) {
    return props.src.replace("/media/drink/", "/media/drink/preview/");
  }
  return props.src;
});

const onImageLoad = () => {
  imageLoaded.value = true;
};

const onImageError = () => {
  imageError.value = true;
};
</script>

<template>
  <div class="lazy-image">
    <div v-if="!imageLoaded && !imageError" class="lazy-image__skeleton"></div>
    <img
      v-show="imageLoaded"
      :src="optimizedSrc"
      :alt="alt"
      class="lazy-image__img"
      loading="lazy"
      decoding="async"
      @load="onImageLoad"
      @error="onImageError"
    />
    <div v-if="imageError" class="lazy-image__error">Image not available</div>
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
    border-radius: 1rem;
  }

  &__skeleton {
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 1rem;
  }

  &__error {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f5f9;
    color: #94a3b8;
    border-radius: 1rem;
  }
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
