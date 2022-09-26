import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { routerConfig } from '../pages/shared/routerConfig'

export const Content = () => {
  return (
    <Routes>
      {routerConfig.map((route) => (
        <Route key={route.path} path={route.path} element={route.component()} />
      ))}
      <Route path="*" element={<Navigate replace to="explorer/readme" />} />
    </Routes>
  )
}
