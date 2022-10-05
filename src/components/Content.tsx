import path from 'path'

import React from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import styled from 'styled-components'

import { routerConfig } from '../pages/shared/routerConfig'
import { StyledLink } from './ui/StyledLink'

const Container = styled.div`
  height: calc(100% - 38px);
  width: 100%;
  display: block;  
`

const RouteTab = styled.div`
  height: 38px;
  width: 100%;
  color: white;
  font-family: 'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 13px;
  line-height: 35px;
  text-overflow: ellipsis;
  text-decoration: none;
`

export const Content = () => {
  return (
    <Routes>
      {routerConfig.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={(
            route.noFileTab ? 
              route.component()
              : (
                <Container>
                  <RouteTab>
                    <RouteTab>
                      {route.path}
                    </RouteTab>
                  </RouteTab>
                  {route.component()}
                </Container>
              )
            
          )}
        />
      ))}
      <Route path="*" element={<Navigate replace to="explorer" />} />
    </Routes>
  )
}
