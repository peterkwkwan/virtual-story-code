import { StateCreator } from 'zustand'

export interface SpeechTrackerSlice {
  speechIndex: number
  increaseSpeechIndex: () => void
  resetSpeechIndex: () => void
}

export const createSpeechTrackerSlice: StateCreator<SpeechTrackerSlice, []> = (
  set
) => ({
  speechIndex: 0,
  increaseSpeechIndex: () =>
    set((state) => ({ speechIndex: state.speechIndex + 1 })),
  resetSpeechIndex: () => set({ speechIndex: 0 }),
})
