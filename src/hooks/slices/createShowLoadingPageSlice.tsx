import { StateCreator } from 'zustand'

export interface ShowLoadingPageSlice {
  showLoadingPage: boolean
  setShowLoadingPage: (value: boolean) => void
}

export const createShowLoadingPageSlice: StateCreator<
  ShowLoadingPageSlice,
  []
> = (set) => ({
  showLoadingPage: true,
  setShowLoadingPage: (value: boolean) =>
    set(() => ({ showLoadingPage: value })),
})
