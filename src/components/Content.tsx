import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import styled from 'styled-components'

import { routerConfig } from '../pages/shared/routerConfig'
import { RouteTab } from './elements/RouteTab'

const Container = styled.div`
  height: 100%;
  width: calc(100% - 348px);
  display: block;
`

export const Content = () => {
  return (
    <Routes>
      {routerConfig.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.fileName === undefined ? (
              route.component()
            ) : (
              <Container>
                <RouteTab
                  name={route.fileName}
                  isExtension={route.path.includes('extensions')}
                />
                {route.component()}
              </Container>
            )
          }
        />
      ))}
      <Route path="*" element={<Navigate replace to="explorer" />} />
    </Routes>
  )
}
