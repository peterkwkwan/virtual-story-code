import { useRef, useEffect } from 'react'

import { useStore, VisibilityState } from './useStore'

export enum Tracker {
  INTRO = 'INTRO',
  MARIO_VINE = 'MARIO_VINE',
  SPEECH_BUBBLE = 'SPEECH_BUBBLE',
}

type UseIntersectionObserver = (
  key: Tracker,
  threshold?: number
) => [VisibilityState, React.RefObject<Element>]

const useIntersectionObserver: UseIntersectionObserver = (
  key,
  threshold = 0.5
) => {
  const [visibility, setVisibility] = useStore((state) => [
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
