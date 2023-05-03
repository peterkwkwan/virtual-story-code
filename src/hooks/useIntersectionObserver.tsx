import { useRef, useEffect } from 'react'

import { VisibilityState } from './slices/createVisibilitySlice'
import { useBoundStore } from './useBoundStore'

export enum Tracker {
  INTRO = 'INTRO',
  MARIO_VINE = 'MARIO_VINE',
  SPEECH_BUBBLE = 'SPEECH_BUBBLE',
  MY_CAREER_TITLE_CARD = 'MY_CAREER_TITLE_CARD',
  TIMELINE = 'TIMELINE',
}

type UseIntersectionObserver = (
  key: Tracker,
  threshold?: number
) => [VisibilityState, React.RefObject<Element>]

const useIntersectionObserver: UseIntersectionObserver = (
  key,
  threshold = 0.5
) => {
  const [visibility, setVisibility] = useBoundStore((state) => [
    state.visibility,
    state.setVisibility,
  ])

  const targetRef = useRef<Element>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisibility({ [key]: entry.isIntersecting })
      },
      { threshold }
    )

    if (targetRef.current) {
      observer.observe(targetRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [targetRef])

  return [visibility, targetRef]
}

export { useIntersectionObserver }
