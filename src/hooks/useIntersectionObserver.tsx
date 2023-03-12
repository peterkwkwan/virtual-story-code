import { useRef, useEffect } from 'react'

import { useStore } from './useStore'

type UseIntersectionObserver = () => [boolean, React.RefObject<Element>]

const useIntersectionObserver: UseIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useStore((state) => [
    state.isVisible,
    state.setIsVisible,
  ])

  const targetRef = useRef<Element>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
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

  return [isVisible, targetRef]
}

export { useIntersectionObserver }
