import { StateCreator } from 'zustand'

export interface OffsetPercentageSlice {
  offsetPercentage: number
  setOffsetPercentage: (percentage: number) => void
}

export const createOffsetPercentageSlice: StateCreator<
  OffsetPercentageSlice,
  []
> = (set) => ({
  offsetPercentage: 0,
  setOffsetPercentage: (percentage) =>
    set(() => ({ offsetPercentage: percentage })),
})
