import { StateCreator } from 'zustand'

export interface BlackNWhiteSlice {
  isBlackNWhite: boolean
  setIsBlackNWhite: () => void
}

export const createBnWSlice: StateCreator<BlackNWhiteSlice, []> = (set) => ({
  isBlackNWhite: false,
  setIsBlackNWhite: () =>
    set((state) => ({ isBlackNWhite: !state.isBlackNWhite })),
})
