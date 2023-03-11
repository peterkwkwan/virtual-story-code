import React, { useRef, useEffect, useState } from 'react'

type UseIntersectionObserver = (
  options: IntersectionObserverInit
) => [React.RefObject<Element>, boolean]

export const useIntersectionObserver: UseIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false)
  const targetRef = useRef<Element>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, options)
    if (targetRef.current) {
      observer.observe(targetRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [options])

  return [targetRef, isVisible]
}
