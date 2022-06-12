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