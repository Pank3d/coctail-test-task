<script setup lang="ts">
import { CocktailsListProps } from '@/entities'
import CocktailCard from './CocktailCard.vue'

defineProps<CocktailsListProps>()
</script>

<template>
  <div class="cocktails-list">
    <CocktailCard v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail" />
  </div>
</template>

<style scoped lang="scss">
@use '@/shared/styles' as *;

.cocktails-list {
  @include flex-column($spacing-md);
}
</style>
