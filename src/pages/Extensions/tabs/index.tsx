import styled from 'styled-components'

import { WorkExperience } from './WorkExperience'
import { ProjectExperience } from './ProjectExperience'

import { Tab } from '@/components/elements/Tabs'
import { Companies } from '@/constants/companies'
import { Projects } from '@/constants/projects'

interface Props {
  title: string
  companies?: Companies[]
  projects?: Projects[]
}

const Container = styled.div`
  width: 60%;
`

export const generateTabs = ({ companies, title, projects }: Props) => {
  const tabs: Tab[] = []

  companies &&
    tabs.push({
      id: 1,
      label: 'Work Experience',
      content: (
        <Container>
          <WorkExperience companies={companies} title={title} />
        </Container>
      ),
    })

  projects &&
    tabs.push({
      id: 2,
      label: 'Related Projects',
      content: (
        <Container>
          <ProjectExperience projects={projects} title={title} />
        </Container>
      ),
    })

  return tabs
}
