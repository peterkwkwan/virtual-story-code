import React, { useContext } from 'react'
import styled from 'styled-components'

import { UnstyledLink } from './UnstyledLink'

import { PageNames, PagePaths } from '@/pages/shared/routerConfig'
import { ExtPageNames } from '@/pages/extensions/ExtensionsRouterConfig'
import { ExplorerContext } from '@/App'
import { BlogPageNames } from '@/pages/blog/BlogRouterConfig'
import { useIcon } from '@/hooks/useIcon'

const Container = styled.div`
  height: 38px;
  width: 100%;
  user-select: none;
  background-color: ${(props) => props.theme.palette.dark03};
`

const Tab = styled.div`
  height: 100%;
  width: fit-content;
  padding: 0 4px 0 10px;
  display: flex;
  align-items: center;
  line-height: 35px;
  color: white;
  background-color: ${(props) => props.theme.palette.dark01};
`

const Label = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 13px;
  margin: 0;
  text-overflow: ellipsis;
`

const Cross = styled.button`
  margin-left: 4px;
  height: 18px;
  width: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 200;
  background: none;
  color: inherit;
  outline: inherit;
  :hover {
    background: ${(props) => props.theme.palette.dark02};
    cursor: pointer;
  }
`

const Icon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 4px;
`
interface Props {
  name: PageNames | ExtPageNames | BlogPageNames
  basePath: string
}

export const RouteTab = ({ name, basePath }: Props) => {
  const iconPath = useIcon(name)

  const { currentFile } = useContext(ExplorerContext)
  const [, setFile] = currentFile

  const handleClose = () => {
    setFile({ title: '', path: '' })
  }

  return (
    <Container>
      <Tab>
        <Icon src={iconPath} alt="tab-icon" />
        <Label>{name}</Label>
        <UnstyledLink path={`/${basePath}`}>
          {basePath == 'search' ? (
            <div style={{ width: '8px' }} />
          ) : (
            <Cross onClick={handleClose}>&#215;</Cross>
          )}
        </UnstyledLink>
      </Tab>
    </Container>
  )
}
