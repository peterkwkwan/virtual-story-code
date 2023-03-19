import { create } from 'zustand'

import {
  createOffsetPercentageSlice,
  OffsetPercentageSlice,
} from './slices/createOffsetPercentageSlice'
import {
  createVisibilitySlice,
  VisibilitySlice,
} from './slices/createVisibilitySlice'

export const useBoundStore = create<VisibilitySlice & OffsetPercentageSlice>()(
  (...a) => ({
    ...createVisibilitySlice(...a),
    ...createOffsetPercentageSlice(...a),
  })
)
