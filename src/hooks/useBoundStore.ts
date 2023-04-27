import { create } from 'zustand'

import {
  createOffsetPercentageSlice,
  OffsetPercentageSlice,
} from './slices/createOffsetPercentageSlice'
import {
  createSpeechTrackerSlice,
  SpeechTrackerSlice,
} from './slices/createSpeechTrackerSlice'
import {
  createVisibilitySlice,
  VisibilitySlice,
} from './slices/createVisibilitySlice'
import { BlackNWhiteSlice, createBnWSlice } from './slices/createBnWSlice'
import {
  createExtensionStatusSlice,
  ExtensionStatusSlice,
} from './slices/createExtensionsStatus'

type Slices = BlackNWhiteSlice &
  OffsetPercentageSlice &
  SpeechTrackerSlice &
  VisibilitySlice &
  ExtensionStatusSlice

export const useBoundStore = create<Slices>()((...a) => ({
  ...createVisibilitySlice(...a),
  ...createOffsetPercentageSlice(...a),
  ...createSpeechTrackerSlice(...a),
  ...createBnWSlice(...a),
  ...createExtensionStatusSlice(...a),
}))
