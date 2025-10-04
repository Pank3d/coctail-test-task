<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useCocktailStore } from "@/entities/cocktails/model/cocktail.store";
import { DataLoader } from "@/shared";
import CocktailsList from "@/entities/cocktails/ui/CocktailsList.vue";
import CocktailsNotFound from "@/entities/cocktails/ui/CocktailsNotFound.vue";

const route = useRoute();
const cocktailStore = useCocktailStore();

const cocktailName = computed(() => route.meta.cocktailName as string);

const cocktailsData = computed(() => {
  return cocktailStore.searchCocktails.data?.drinks;
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
      <CocktailsList v-if="cocktailsData" :cocktails="cocktailsData" />
      <CocktailsNotFound v-else :cocktail-name="cocktailName" />
    </DataLoader>
  </div>
</template>

<style scoped lang="scss">
.main-page {
  width: 100%;
  max-width: 1024px;
}
</style>
