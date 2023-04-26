import React, { useState } from 'react'

import Background from './Background'
import { LoadingAnimation } from './LoadingAnimation'

export const Loading = () => {
  const [showLoadingPage, setShowLoadingPage] = useState(true)

  const handleEnterSite = () => {
    setShowLoadingPage(false)
  }
  return (
    <>
      <Background showLoadingPage={showLoadingPage} />
      <LoadingAnimation
        showLoadingPage={showLoadingPage}
        onEnterClick={handleEnterSite}
      />
    </>
  )
}
