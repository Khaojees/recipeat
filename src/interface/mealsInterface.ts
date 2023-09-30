
export interface IGetMealsData{
      status: number | undefined
      data?: Root
    }

    export interface Root {
      recipes: ImealsData[]
    }

export interface ImealsData{
  vegetarian?: boolean | null | undefined
  vegan?: boolean | null | undefined
  glutenFree?: boolean | null | undefined
  dairyFree?: boolean | null | undefined
  veryHealthy?: boolean | null | undefined
  cheap?: boolean | null | undefined
  veryPopular?: boolean | null | undefined
  sustainable?: boolean | null | undefined
  lowFodmap?: boolean | null | undefined
  weightWatcherSmartPoints?: number | null | undefined
  gaps?: string | null | undefined
  preparationMinutes?: number | null | undefined
  cookingMinutes?: number | null | undefined
  aggregateLikes?: number | null | undefined
  healthScore?: number | null | undefined
  creditsText?: string | null | undefined
  license?: string | null | undefined
  sourceName?: string | null | undefined
  pricePerServing?: number | null | undefined
  extendedIngredients?: ExtendedIngredient[] | null | undefined
  id?: number | null | undefined
  title?: string | null | undefined
  readyInMinutes?: number | null | undefined
  servings?: number | null | undefined
  sourceUrl?: string | null | undefined
  image?: string | null | undefined
  imageType?: string | null | undefined
  summary?: string | null | undefined
  cuisines?: string[] | null | undefined
  dishTypes?: string[] | null | undefined
  diets?: string[] | null | undefined
  occasions?: string[] | null | undefined
  instructions?: string | null | undefined
  analyzedInstructions?: AnalyzedInstruction[] | null | undefined
  originalId?: any | null | undefined
  spoonacularSourceUrl?: string | null | undefined
}

export interface ExtendedIngredient {
  id?: number | null | undefined
  aisle?: string | null | undefined
  image?: string | null | undefined
  consistency?: string | null | undefined
  name?: string | null | undefined
  nameClean?: string | null | undefined
  original?: string | null | undefined
  originalName?: string | null | undefined
  amount?: number | null | undefined
  unit?: string | null | undefined
  meta?: string[] | null | undefined
  measures?: Measures | null | undefined
}

export interface Measures {
  us?: Us | null | undefined
  metric?: Metric | null | undefined
}

export interface Us {
  amount?: number | null | undefined
  unitShort: string | null | undefined
  unitLong: string | null | undefined
}

export interface Metric {
  amount: number | null | undefined
  unitShort?: string | null | undefined
  unitLong?: string | null | undefined
}

export interface AnalyzedInstruction {
  name?: string | null | undefined
  steps?: Step[] | null | undefined
}

export interface Step {
  number?: number | null | undefined
  step?: string | null | undefined
  ingredients?: Ingredient[] | null | undefined
  equipment?: Equipment[] | null | undefined
  length?: Length | null | undefined
}

export interface Ingredient {
  id?: number | null | undefined
  name?: string | null | undefined
  localizedName?: string | null | undefined
  image?: string | null | undefined
}

export interface Equipment {
  id?: number | null | undefined
  name?: string | null | undefined
  localizedName?: string | null | undefined
  image?: string | null | undefined
  temperature?: Temperature | null | undefined
}

export interface Temperature {
  number?: number | null | undefined
  unit?: string | null | undefined
}

export interface Length {
  number?: number | null | undefined
  unit?: string | null | undefined
}