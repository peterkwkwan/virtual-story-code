import { RouterConfig } from '@/pages/shared/routerConfig'

export interface ExtensionConfig extends RouterConfig {
  title: Skills
  description: string
  iconSrc: string
  type: string
  proficiency:
    | 'Proficient'
    | 'Advanced'
    | 'Intermediate'
    | 'Functional'
    | 'Hobbyist'
  rating: number
}
