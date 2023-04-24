import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import ReactGA from 'react-ga'

import { routerConfig } from '../pages/shared/routerConfig'
import { RouteTab } from './elements/RouteTab'

ReactGA.initialize('G-230YPQTB8S')

const Container = styled.div`
  height: 100%;
  width: calc(100% - 348px);
  display: block;
`

const ROUTE_TAB_HEIGHT = 38

export const Content = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

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
                  basePath={route.path.split('/')[0]}
                />
                <div
                  style={{
                    height: `calc(100% - ${ROUTE_TAB_HEIGHT}px`,
                    overflow: 'auto',
                  }}
                >
                  {route.component()}
                </div>
              </Container>
            )
          }
        />
      ))}
      <Route path="*" element={<Navigate replace to="explorer" />} />
    </Routes>
  )
}
