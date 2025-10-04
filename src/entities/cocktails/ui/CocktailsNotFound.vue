<script setup lang="ts">
interface CocktailsNotFoundProps {
  cocktailName: string;
}

defineProps<CocktailsNotFoundProps>();
</script>

<template>
  <div class="cocktails-not-found">
    <h2>Cocktail not found</h2>
    <p>No cocktail found with the name "{{ cocktailName }}"</p>
  </div>
</template>

<style scoped lang="scss">
.cocktails-not-found {
  text-align: center;
  padding: 3rem;
  color: #64748b;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
