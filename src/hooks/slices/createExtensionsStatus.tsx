import { StateCreator } from 'zustand'

export type ExtensionStatus = {
  [key: string]: {
    disabled: boolean
    uninstalled: boolean
  }
}

type State = {
  status: ExtensionStatus
}

export interface ExtensionStatusSlice {
  extensionStatus: ExtensionStatus
  setExtensionStatus: (status: State['status']) => void
}

export const createExtensionStatusSlice: StateCreator<
  ExtensionStatusSlice,
  []
> = (set) => ({
  extensionStatus: {},
  setExtensionStatus: (status) =>
    set((state) => ({
      extensionStatus: { ...state.extensionStatus, ...status },
    })),
})
