import { create } from 'zustand'

type State = {
  isVisible: boolean
}

type Action = {
  setIsVisible: (isVisible: State['isVisible']) => void
}

export const useStore = create<State & Action>((set) => ({
  isVisible: false,
  setIsVisible: (isVisible) => set(() => ({ isVisible: isVisible })),
}))
