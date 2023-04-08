import React, { useContext } from 'react'
import styled from 'styled-components'

import { UnstyledLink } from './UnstyledLink'

import { PageNames, PagePaths } from '@/pages/shared/routerConfig'
import { ExtPageNames } from '@/pages/extensions/ExtensionsRouterConfig'
import { ExplorerContext } from '@/App'
import { BlogPageNames } from '@/pages/blog/BlogRouterConfig'

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
  font-family: 'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  width: 18px;
  height: 18px;
  margin-right: 2px;
`
interface Props {
  name: PageNames | ExtPageNames | BlogPageNames
  isExtension: boolean
}

export const RouteTab = ({ name, isExtension }: Props) => {
  const { currentFile } = useContext(ExplorerContext)
  const [, setFile] = currentFile

  const handleClose = () => {
    setFile({ title: '', path: '' })
  }

  return (
    <Container>
      <Tab>
        {isExtension && (
          <Icon
            src="/assets/icons/extensions/extension-icon.jpg"
            alt="extension-icon"
          />
        )}
        <Label>{name}</Label>
        <UnstyledLink
          path={isExtension ? `/${PagePaths.EXTENSIONS}` : `/${PagePaths.HOME}`}
        >
          <Cross onClick={handleClose}>&#215;</Cross>
        </UnstyledLink>
      </Tab>
    </Container>
  )
}
