<script setup lang="ts">
import { EmptyState } from "@/shared";

interface CocktailsNotFoundProps {
  cocktailName: string;
}

defineProps<CocktailsNotFoundProps>();
</script>

<template>
  <EmptyState
    title="Cocktail not found"
    :message="`No cocktail found with the name &quot;${cocktailName}&quot;`"
  />
</template>

<style scoped lang="scss">
</style>
