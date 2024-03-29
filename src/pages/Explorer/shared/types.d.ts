import { Companies } from '@/constants/companies'

export interface IJobDescription {
  role: string
  isCurrentRole?: boolean
  companyName: Companies
  date: string
  location: string
  companyDescription: string
  functions: string[]
  techStack: string[]
}

export type INonTechJobDescription = Omit<IJobDescription, 'techStack'>

export interface IEducationDescription {
  schoolName: string
  year: string
  location: { city: string; country: string }
  degreeType: string
  degreeName: string
  subjects?: string[]
}

interface File {
  title: string
  path: string
}

export interface FolderContent {
  opened: boolean
  files?: File[]
}
