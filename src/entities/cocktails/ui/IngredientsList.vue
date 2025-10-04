<script setup lang="ts">
import type { ICocktailData } from "../api/types";
import { getIngredients } from "../lib";

interface IngredientsListProps {
  cocktail: ICocktailData;
}

const props = defineProps<IngredientsListProps>();

const ingredients = getIngredients(props.cocktail);
</script>

<template>
  <div class="ingredients-list">
    <h3 class="ingredients-list__title">Ingredients</h3>
    <ul class="ingredients-list__items">
      <li
        v-for="(item, index) in ingredients"
        :key="index"
        class="ingredients-list__item"
      >
        <span class="ingredients-list__measure">{{ item.measure }}</span>
        <span class="ingredients-list__name">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "@/app/styles/mixins.scss";

.ingredients-list {
  margin-top: var(--spacing-xl);

  &__title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-md);
  }

  &__items {
    list-style: none;
    padding: 0;
    margin: 0;
    @include flex-column(var(--spacing-sm));
  }

  &__item {
    @include flex-row(var(--spacing-md));
    padding: var(--spacing-sm);
    background-color: var(--color-bg-light);
    border-radius: var(--radius-sm);
    border-left: 3px solid var(--color-primary);
  }

  &__measure {
    font-weight: var(--font-weight-medium);
    color: var(--color-primary);
    min-width: 6rem;
  }

  &__name {
    color: var(--color-text-secondary);
  }
}
</style>
