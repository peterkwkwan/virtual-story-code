import { RouterConfig } from '@/pages/shared/routerConfig'

export interface ExtensionConfig extends RouterConfig {
  title: Skills
  description: string
  icon: JSX.Element
  type: string
  proficiency:
    | 'Proficient'
    | 'Advanced'
    | 'Intermediate'
    | 'Functional'
    | 'Hobbyist'
  rating: number
}
