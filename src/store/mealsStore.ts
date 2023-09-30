import { create } from 'zustand'
import {ImealsData} from '@/interface/mealsInterface'

const initStore = {
      meals: {
        data: [],
        loading: false,
        error: null,
      },
      fetchMeals: {
        data: [],
        loading: false,
        error: null,
      },
    }

    type mealsType = {
      data: ImealsData[]
      loading: boolean
      error: null | any
    }

    type useMealsListStoreType = {
      meals: mealsType
      fetchMeals: mealsType,
      setMealsList: (value: mealsType) => void,
      setFetchMealsList: (value: mealsType) => void,
      clearMealsList: () => void,
    }

    export const useMealsListStore = create<useMealsListStoreType>((set) => ({
      ...initStore,
      setMealsList: (value: mealsType) => set({ meals: value }),
      setFetchMealsList: (value: mealsType) => set({ fetchMeals: value }),
      clearMealsList: () => set({ ...initStore }),
    }))




    
    type useCurrentMealType = {
      currentMeal: ImealsData | null,
      setCurrentMeal: (value: ImealsData) => void,
    }
    export const useCurrentMeal = create<useCurrentMealType>((set) => ({
      currentMeal:null,
      setCurrentMeal: (value: ImealsData) => set({ currentMeal: value })
    }))



    type setShowFilterType = {
      myFilter: boolean
      toggleFilter: () => void,
    }
    export const setShowFilter = create<setShowFilterType>((set)=>({
      myFilter:false,
      toggleFilter: () => set((state)=>({myFilter:!state.myFilter}))
    }))
    
    type setShowSearchType = {
      mySearch: boolean
      showSearch: () => void,
      hideSearch: () => void,
    }
    export const setShowSearch = create<setShowSearchType>((set)=>({
      mySearch:true,
      showSearch: () => set(()=>({mySearch:true})),
      hideSearch: () => set(()=>({mySearch:false}))
    }))


    type setShowMiniSearchType = {
      myMiniSearch: boolean
      showMiniSearch: () => void,
      hideMiniSearch: () => void,
    }
    export const setShowMiniSearch = create<setShowMiniSearchType>((set)=>({
      myMiniSearch:false,
      showMiniSearch: () => set(()=>({myMiniSearch:true})),
      hideMiniSearch: () => set(()=>({myMiniSearch:false}))
    }))

  
    type setShowMealsType = {
      myMeals: boolean
      showMyMeals: () => void,
      hideMyMeals: () => void,
    }
    export const setShowMeals = create<setShowMealsType>((set)=>({
      myMeals:true,
      showMyMeals: () => set(()=>({myMeals:true})),
      hideMyMeals: () => set(()=>({myMeals:false}))
    }))

    type setSortType = {
      mealsTemp: ImealsData[],
      price: boolean
      cookingTime: boolean
      health: boolean
      sortPriceType: boolean
      sortCookingTimeType: boolean
      sortHealthType: boolean
      setPrice: (value:boolean) => void,
      setCookingTime: (value:boolean) => void,
      setHealth: (value:boolean) => void,
      setSortPriceType: (value:boolean) => void,
      setSortCookingTimeType: (value:boolean) => void,
      setSortHealthType: (value:boolean) => void,
      setMealsTemp: (value:ImealsData[]) => void,
      saveMealsItem: ImealsData[],
      setSaveMealsItem: (value:ImealsData[]) => void,
    }

    export const setSortState = create<setSortType>((set)=>({
      mealsTemp: [],
      price: false,
      cookingTime: false,
      health: false,
      sortPriceType: true,
      sortCookingTimeType: true,
      sortHealthType: true,
      setPrice: (value) => set({price:value}),
      setCookingTime: (value) => set({cookingTime:value}),
      setHealth: (value) => set(()=>({health:value})),
      setSortPriceType: (value) => set({sortPriceType:value}),
      setSortCookingTimeType: (value) => set({sortCookingTimeType:value}),
      setSortHealthType: (value) => set({sortHealthType:value}),
        setMealsTemp: (value:ImealsData[]) => set({mealsTemp:value}),
        saveMealsItem: [],
      setSaveMealsItem: (value:ImealsData[]) => set({saveMealsItem:value}),
    }))



    type setShowNexrPreBtnType = {
      nextPrevBtn: boolean
      showNextPrevBtnForMeals: () => void,
      showNextPrevBtnForSaveMeals: () => void,
    }
    export const setShowNexrPrevBtn = create<setShowNexrPreBtnType>((set)=>({
      nextPrevBtn:true,
      showNextPrevBtnForMeals: () => set(()=>({nextPrevBtn:true})),
      showNextPrevBtnForSaveMeals: () => set(()=>({nextPrevBtn:false}))
    }))