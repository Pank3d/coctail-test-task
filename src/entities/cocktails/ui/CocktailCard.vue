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
@import '@/app/styles/mixins.scss';

.cocktail-card {
  width: 100%;
  background: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: var(--spacing-xl);

  &__content {
    @include flex-row(var(--spacing-xl));

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__info {
    flex: 1;
  }

  &__title {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-primary);
    margin: 0 0 var(--spacing-md) 0;
  }

  &__details {
    @include flex-column(var(--spacing-xs));
    margin-bottom: var(--spacing-lg);
  }

  &__detail {
    margin: 0;
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
  }

  &__instructions {
    margin-top: var(--spacing-lg);
    padding: var(--spacing-lg);
    background-color: var(--color-bg-light);
    border-radius: var(--radius-sm);

    &-title {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-medium);
      color: var(--color-text-primary);
      margin: 0 0 var(--spacing-md) 0;
    }

    &-text {
      margin: 0;
      color: var(--color-text-secondary);
      line-height: 1.6;
    }
  }

  &__image-wrapper {
    flex-shrink: 0;
    width: 400px;
    height: 400px;
    position: relative;

    @media (max-width: 768px) {
      width: 100%;
      height: 300px;
    }
  }
}
</style>
