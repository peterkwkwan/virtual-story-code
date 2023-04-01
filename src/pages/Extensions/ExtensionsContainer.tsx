import styled from 'styled-components'

import { ExtensionsSearchBox } from './ExtensionsSearchBox'
import { SkillSidebarList } from './SkillSidebarList'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 35px);
`

export const ExtensionsContainer = () => {
  return (
    <Container>
      <ExtensionsSearchBox />
      <SkillSidebarList />
    </Container>
  )
}
