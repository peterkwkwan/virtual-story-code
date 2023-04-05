import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const useActivePath = (path: string) => {
  const [active, setActive] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setActive(pathname.includes(path))
  }, [pathname])

  return active
}
