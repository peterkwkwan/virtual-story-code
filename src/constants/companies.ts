export enum Companies {
  WTW = 'Willis Towers Watson',
  SERAI = 'Serai',
  BCW = 'BCW Group',
  PAG = 'PAG',
  MANULIFE = 'Manulife',
  ACURIS = 'Acuris',
  COLEMAN_RESEARCH = 'Coleman Research',
}

export const CompaniesDates: { [key: string]: string } = {
  [Companies.WTW]: 'Nov 2022 - Present',
  [Companies.BCW]: 'Jul 2022 - Oct 2022',
  [Companies.SERAI]: 'Oct 2021 - Jul 2022',
  [Companies.PAG]: 'May 2020 - Oct 2021',
  [Companies.MANULIFE]: 'Aug 2019 - May 2020',
}

export const CompanyDescriptions: { [key: string]: string } = {
  [Companies.WTW]:
    'WTW (or Willis Towers Watson) is a global advisory, broking, and solutions provider, operating in over 140 countries worldwide.',
  [Companies.BCW]:
    'BCW Group is a consulting & technology firm specialising in 3 inter-connected disciplines: digital payments, digital assets & distributed ledger technology (DLT).',
  [Companies.SERAI]:
    'Serai by HSBC is a B2B platform helping businesses simplify their supply chains.',
  [Companies.PAG]:
    'PAG is one of Asia’s leading investment firms, managing more than US$35 billion in capital across strategies including private equity, real estate and absolute returns.',
  [Companies.MANULIFE]:
    'Manulife is a multinational insurance company headquartered in Toronto, Canada.',
}
