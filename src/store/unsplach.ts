import { create } from 'zustand'
import {UnsplachImage} from '@/interface/unsplachInterface'

const initStore = {
      unsplachImg: {
        data: [],
        loading: false,
        error: null,
      },
    }

    type imgType = {
      data: UnsplachImage[] | (string | undefined)[]
      loading: boolean
      error: null | any
    }

    type useUnsplachType = {
      unsplachImg: imgType
      setUnsplachImg: (value: imgType) => void,
      clearUnsplachImg: () => void
    }

    export const useUnsplachStore = create<useUnsplachType>((set) => ({
      ...initStore,
      setUnsplachImg: (value: imgType) => set({ unsplachImg: value }),
      clearUnsplachImg: () => set({ ...initStore }),
    }))