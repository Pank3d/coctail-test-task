<script setup lang="ts">
import { LazyImage } from '@/shared'
import { CocktailCardProps } from '@/entities'

import IngredientsList from './IngredientsList.vue'

defineProps<CocktailCardProps>()
</script>

<template>
  <article class="cocktail-card">
    <div class="cocktail-card__content">
      <div class="cocktail-card__info">
        <h1 class="cocktail-card__title">{{ cocktail.strDrink }}</h1>
        <div class="cocktail-card__details">
          <p class="cocktail-card__detail">{{ cocktail.strCategory }}</p>
          <p class="cocktail-card__detail">{{ cocktail.strAlcoholic }}</p>
          <p class="cocktail-card__detail">{{ cocktail.strGlass }}</p>
        </div>
        <div v-if="cocktail.strInstructions" class="cocktail-card__instructions">
          <h3 class="cocktail-card__instructions-title">Instructions</h3>
          <p class="cocktail-card__instructions-text">
            {{ cocktail.strInstructions }}
          </p>
        </div>
        <IngredientsList :cocktail="cocktail" />
      </div>
      <div class="cocktail-card__image-wrapper">
        <LazyImage :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
@use '@/shared/styles' as *;

.cocktail-card {
  width: 100%;
  background: $color-white;
  border-radius: $radius-md;
  box-shadow: $shadow-sm;
  padding: $spacing-xl;

  &__content {
    @include flex-row($spacing-xl);

    @include mobile {
      flex-direction: column;
    }
  }

  &__info {
    flex: 1;
  }

  &__title {
    @include font-2xl;
    color: $color-text-primary;
    margin: 0 0 $spacing-md 0;
  }

  &__details {
    @include flex-column($spacing-xs);
    margin-bottom: $spacing-lg;
  }

  &__detail {
    @include font-sm;
    margin: 0;
    color: $color-text-muted;
  }

  &__instructions {
    margin-top: $spacing-lg;
    padding: $spacing-lg;
    background-color: $color-bg-light;
    border-radius: $radius-sm;

    &-title {
      @include font-lg;
      color: $color-text-primary;
      margin: 0 0 $spacing-md 0;
    }

    &-text {
      @include font-base;
      margin: 0;
      color: $color-text-secondary;
      line-height: 1.6;
    }
  }

  &__image-wrapper {
    flex-shrink: 0;
    width: 400px;
    height: 400px;
    position: relative;

    @include mobile {
      width: 100%;
      height: 300px;
    }
  }
}
</style>
