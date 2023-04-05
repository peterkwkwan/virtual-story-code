export interface Extension {
  title: string
  description: string
  path: ExtPagePaths
  icon: JSX.Element
  type: string
  fileName: ExtPageNames
  proficiency:
    | 'Proficient'
    | 'Advanced'
    | 'Intermediate'
    | 'Functional'
    | 'Hobbyist'
  rating: number
  component: () => JSX.Element
}
