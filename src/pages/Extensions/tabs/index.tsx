import { WorkExperience } from './WorkExperience'

import { Tab } from '@/components/elements/Tabs'
import { Companies } from '@/constants/companies'
import { Projects } from '@/constants/projects'

interface Props {
  title: string
  companies?: Companies[]
  projects?: Projects[]
}

export const generateTabs = ({ companies, title, projects }: Props) => {
  const tabs: Tab[] = []

  companies &&
    tabs.push({
      id: 1,
      label: 'Work Experience',
      content: <WorkExperience companies={companies} title={title} />,
    })
  return tabs
}
