import { useRef, useEffect } from 'react'

import { useStore, VisibilityState } from './useStore'

import { IDENTITY } from '@/pages/explorer/Home/ParallaxLayers/shared/constants'

type ObserverTagKey = IDENTITY.EAT | IDENTITY.CODE

type UseIntersectionObserver = (
  key: ObserverTagKey
) => [VisibilityState, React.RefObject<Element>]

const useIntersectionObserver: UseIntersectionObserver = (key) => {
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
      { threshold: 0.5 }
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
