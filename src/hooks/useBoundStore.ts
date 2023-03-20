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

type Slices = OffsetPercentageSlice & SpeechTrackerSlice & VisibilitySlice

export const useBoundStore = create<Slices>()((...a) => ({
  ...createVisibilitySlice(...a),
  ...createOffsetPercentageSlice(...a),
  ...createSpeechTrackerSlice(...a),
}))
