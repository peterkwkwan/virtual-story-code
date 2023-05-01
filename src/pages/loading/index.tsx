import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Background from './Background'
import { Content } from './Content'
import { PagePaths } from '../shared/routerConfig'

import { useBoundStore } from '@/hooks/useBoundStore'

export const Loading = () => {
  const [showLoadingPage, setShowLoadingPage] = useBoundStore((state) => [
    state.showLoadingPage,
    state.setShowLoadingPage,
  ])
  const navigate = useNavigate()

  const handleEnterSite = () => {
    setShowLoadingPage(false)
    setTimeout(() => {
      navigate(PagePaths.HOME)
    }, 500)
  }
  return (
    <>
      <Background showLoadingPage={showLoadingPage}>
        <Content
          showLoadingPage={showLoadingPage}
          onEnterClick={handleEnterSite}
        />
      </Background>
    </>
  )
}
