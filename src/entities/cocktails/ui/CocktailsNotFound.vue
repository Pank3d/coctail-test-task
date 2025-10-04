<script setup lang="ts">
import { EmptyState } from '@/shared'
import { CocktailsNotFoundProps } from '@/entities'

defineProps<CocktailsNotFoundProps>()
</script>

<template>
  <EmptyState
    title="Cocktail not found"
    :message="`No cocktail found with the name &quot;${cocktailName}&quot;`"
  />
</template>
