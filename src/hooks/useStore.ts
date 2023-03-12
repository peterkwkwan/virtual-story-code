import { create } from 'zustand'

export type VisibilityState = { [key: string]: boolean }

type State = {
  visibility: VisibilityState
}

type Action = {
  setVisibility: (visibility: State['visibility']) => void
}

export const useStore = create<State & Action>((set) => ({
  visibility: {},
  setVisibility: (visibility) =>
    set((state) => ({ visibility: { ...state.visibility, ...visibility } })),
}))
