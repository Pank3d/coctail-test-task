<script setup lang="ts">
import { IngredientsListProps } from '@/entities'
import { getIngredients } from '../lib'

const props = defineProps<IngredientsListProps>()

const ingredients = getIngredients(props.cocktail)
</script>

<template>
  <div class="ingredients-list">
    <h3 class="ingredients-list__title">Ingredients</h3>
    <ul class="ingredients-list__items">
      <li v-for="(item, index) in ingredients" :key="index" class="ingredients-list__item">
        <span class="ingredients-list__measure">{{ item.measure }}</span>
        <span class="ingredients-list__name">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use '@/shared/styles' as *;

.ingredients-list {
  margin-top: $spacing-xl;

  &__title {
    @include font-lg;
    color: $color-text-primary;
    margin-bottom: $spacing-md;
  }

  &__items {
    list-style: none;
    padding: 0;
    margin: 0;
    @include flex-column($spacing-sm);
  }

  &__item {
    @include flex-row($spacing-md);
    padding: $spacing-sm;
    background-color: $color-bg-light;
    border-radius: $radius-sm;
    border-left: 3px solid $color-primary;
  }

  &__measure {
    font-weight: $font-weight-medium;
    color: $color-primary;
    min-width: 6rem;
  }

  &__name {
    color: $color-text-secondary;
  }
}
</style>
