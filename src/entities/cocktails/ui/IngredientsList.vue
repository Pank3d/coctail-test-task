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
.ingredients-list {
  margin-top: 2rem;

  &__title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1rem;
  }

  &__items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__item {
    display: flex;
    gap: 1rem;
    padding: 0.75rem;
    background-color: #f8fafc;
    border-radius: 0.5rem;
    border-left: 3px solid #4f46e5;
  }

  &__measure {
    font-weight: 600;
    color: #4f46e5;
    min-width: 6rem;
  }

  &__name {
    color: #475569;
  }
}
</style>
