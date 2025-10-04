<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useCocktailStore } from "@/entities/cocktails/model/cocktail.store";
import { DataLoader } from "@/shared";
import CocktailCard from "@/entities/cocktails/ui/CocktailCard.vue";

const route = useRoute();
const cocktailStore = useCocktailStore();

const cocktailName = computed(() => route.meta.cocktailName as string);

const firstCocktail = computed(() => {
  return cocktailStore.searchCocktails.data?.drinks?.[0];
});
</script>

<template>
  <div class="main-page">
    <DataLoader
      :actions="{
        execute: cocktailStore.searchCocktails.execute,
        state: cocktailStore.searchCocktails.state,
        param: cocktailName,
      }"
      :no-delay="true"
    >
      <CocktailCard v-if="firstCocktail" :cocktail="firstCocktail" />
      <div v-else class="main-page__not-found">
        <h2>Cocktail not found</h2>
        <p>No cocktail found with the name "{{ cocktailName }}"</p>
      </div>
    </DataLoader>
  </div>
</template>

<style scoped lang="scss">
.main-page {
  width: 100%;
  max-width: 1200px;

  &__not-found {
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
}
</style>
