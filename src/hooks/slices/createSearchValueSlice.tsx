import { StateCreator } from 'zustand'

export interface SearchValueSlice {
  searchValue: string
  setSearchValueSlice: (value: string) => void
}

export const createSearchValueSlice: StateCreator<SearchValueSlice, []> = (
  set
) => ({
  searchValue: '',
  setSearchValueSlice: (value: string) => set(() => ({ searchValue: value })),
})
