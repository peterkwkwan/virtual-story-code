export interface IJobDescription {
    role: string;
    isCurrentRole?: boolean;
    companyName: string;
    date: string;
    location: string;
    companyDescription: string;
    functions: string[];
    techStack: string[];
  }

export type INonTechJobDescription = Omit<IJobDescription,'techStack'>

export interface IEducationDescription {
    schoolName: string;
    year: string;
    location: string;
    degreeType: string;
    degreeName: string;
    subjects?: string[];
}