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
@import '@/app/styles/mixins.scss';

.cocktails-list {
  @include flex-column(var(--spacing-md));
}
</style>
