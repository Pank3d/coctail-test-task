import { describe, it, expect } from 'vitest'
import { getIngredients } from './getIngredients'
import type { ICocktailData } from '../api/types'

describe('getIngredients', () => {
  it('should return empty array when no ingredients', () => {
    const cocktail = {} as ICocktailData
    const result = getIngredients(cocktail)
    expect(result).toEqual([])
  })

  it('should extract ingredients with measures', () => {
    const cocktail = {
      strIngredient1: 'Vodka',
      strMeasure1: '1 oz',
      strIngredient2: 'Orange Juice',
      strMeasure2: '2 oz',
    } as unknown as ICocktailData

    const result = getIngredients(cocktail)

    expect(result).toHaveLength(2)
    expect(result[0]).toEqual({ name: 'Vodka', measure: '1 oz' })
    expect(result[1]).toEqual({ name: 'Orange Juice', measure: '2 oz' })
  })

  it('should handle missing measures', () => {
    const cocktail = {
      strIngredient1: 'Vodka',
      strMeasure1: null,
      strIngredient2: 'Lime',
    } as unknown as ICocktailData

    const result = getIngredients(cocktail)

    expect(result).toHaveLength(2)
    expect(result[0]).toEqual({ name: 'Vodka', measure: '' })
    expect(result[1]).toEqual({ name: 'Lime', measure: '' })
  })

  it('should trim measures', () => {
    const cocktail = {
      strIngredient1: 'Salt',
      strMeasure1: '  1 pinch  ',
    } as unknown as ICocktailData

    const result = getIngredients(cocktail)

    expect(result[0]).toEqual({ name: 'Salt', measure: '1 pinch' })
  })

  it('should skip null or empty ingredients', () => {
    const cocktail = {
      strIngredient1: 'Vodka',
      strMeasure1: '1 oz',
      strIngredient2: null,
      strIngredient3: '',
      strIngredient4: 'Lime',
      strMeasure4: '1 piece',
    } as unknown as ICocktailData

    const result = getIngredients(cocktail)

    expect(result).toHaveLength(2)
    expect(result[0].name).toBe('Vodka')
    expect(result[1].name).toBe('Lime')
  })
})
