<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useCocktails } from "@/entities";
import { DataLoader } from "@/shared";
import CocktailsList from "@/entities/cocktails/ui/CocktailsList.vue";
import CocktailsNotFound from "@/entities/cocktails/ui/CocktailsNotFound.vue";

const route = useRoute();

const cocktailName = computed(() => route.meta.cocktailName as string);

const { data, isLoading, isError } = useCocktails(cocktailName.value);
const cocktailsData = computed(() => data.value?.drinks);
</script>

<template>
  <div class="main-page">
    <DataLoader :is-loading="isLoading" :is-error="isError">
      <CocktailsList v-if="cocktailsData" :cocktails="cocktailsData" />
      <CocktailsNotFound v-else :cocktail-name="cocktailName" />
    </DataLoader>
  </div>
</template>

<style scoped lang="scss">
.main-page {
  width: 100%;
}
</style>
