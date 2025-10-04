<script setup lang="ts">
import type { ICocktailData } from "../api/types";
import IngredientsList from "./IngredientsList.vue";
import { LazyImage } from "@/shared";

interface CocktailCardProps {
  cocktail: ICocktailData;
}

const props = defineProps<CocktailCardProps>();
</script>

<template>
  <article class="cocktail-card">
    <div class="cocktail-card__content">
      <div class="cocktail-card__info">
        <h1 class="cocktail-card__title">{{ cocktail.strDrink }}</h1>
        <div class="cocktail-card__details">
          <p class="cocktail-card__detail">{{ cocktail.strCategory }}</p>
          <p class="cocktail-card__detail">{{ cocktail.strAlcoholic }}</p>
          <p class="cocktail-card__detail">{{ cocktail.strGlass }}</p>
        </div>
        <div
          v-if="cocktail.strInstructions"
          class="cocktail-card__instructions"
        >
          <h3 class="cocktail-card__instructions-title">Instructions</h3>
          <p class="cocktail-card__instructions-text">
            {{ cocktail.strInstructions }}
          </p>
        </div>
        <IngredientsList :cocktail="cocktail" />
      </div>
      <div class="cocktail-card__image-wrapper">
        <LazyImage :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.cocktail-card {
  width: 100%;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 2rem;

  &__content {
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__info {
    flex: 1;
  }

  &__title {
    font-size: 2rem;
    font-weight: 700;
    color: #1e293b;
    margin: 0 0 1rem 0;
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  &__detail {
    margin: 0;
    color: #64748b;
    font-size: 0.95rem;
  }

  &__instructions {
    margin-top: 1.5rem;
    padding: 1.5rem;
    background-color: #f8fafc;
    border-radius: 0.5rem;

    &-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1e293b;
      margin: 0 0 1rem 0;
    }

    &-text {
      margin: 0;
      color: #475569;
      line-height: 1.6;
    }
  }

  &__image-wrapper {
    flex-shrink: 0;
    width: 400px;
    height: 400px;
    position: relative;

    @media (max-width: 768px) {
      width: 100%;
      height: 300px;
    }
  }
}
</style>
