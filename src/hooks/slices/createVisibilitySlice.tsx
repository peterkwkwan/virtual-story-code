import { StateCreator } from 'zustand'

export type VisibilityState = { [key: string]: boolean }

type State = {
  visibility: VisibilityState
}

export interface VisibilitySlice {
  visibility: VisibilityState
  setVisibility: (visibility: State['visibility']) => void
}

export const createVisibilitySlice: StateCreator<VisibilitySlice, []> = (
  set
) => ({
  visibility: {},
  setVisibility: (visibility) =>
    set((state) => ({ visibility: { ...state.visibility, ...visibility } })),
})
