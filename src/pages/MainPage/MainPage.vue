<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCocktails, CocktailsList, CocktailsNotFound } from '@/entities'
import { DataLoader } from '@/shared'

const route = useRoute()
const cocktailName = computed(() => route.meta.cocktailName as string)
const { data, isLoading, error, refetch } = useCocktails(cocktailName)
const cocktailsData = computed(() => data.value?.drinks)
const isError = computed(() => !!error.value)
</script>

<template>
  <div class="main-page">
    <DataLoader :is-loading="isLoading" :is-error="isError" :on-retry="refetch">
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
