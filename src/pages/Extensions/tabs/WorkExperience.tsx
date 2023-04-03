import React from 'react'
import styled from 'styled-components'

import { Companies, CompanyDescriptions } from '@/constants/companies'

const Intro = styled.p`
  margin: 0;
`

const CompanyCardContainer = styled.div`
  margin-top: 16px;
  width: 100%;
`

const CompanyCard = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  color: ${(props) => props.theme.palette.text02};
  :not(:first-of-type) {
    margin-top: 20px;
  }
  :hover {
    color: ${(props) => props.theme.palette.text01};
    p:first-of-type {
      border-bottom: 1px solid ${(props) => props.theme.palette.text01};
    }
    > img {
      filter: brightness(100%);
    }
  }
`

const CompanyLogo = styled.img`
  width: 48px;
  height: 48px;
  filter: brightness(80%);
`

const Details = styled.div`
  margin-left: 12px;
  overflow: hidden;
`

const Title = styled.p`
  margin: 0;
  font-weight: 700;
  border-bottom: 1px solid transparent;
  width: fit-content;
`

const Description = styled.p`
  font-weight: 200;
  margin: 8px 0 0;
  font-size: 90%;
  color: ${(props) => props.theme.palette.text03};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
`

interface Props {
  companies: Companies[]
  title: string
}

export const WorkExperience = ({ companies, title }: Props) => {
  const isSingular = companies.length === 1
  return (
    <>
      <Intro>
        I have experience in {title} at {isSingular ? 'this' : 'these'}&nbsp;
        {isSingular ? 'company' : 'companies'}:
      </Intro>
      <CompanyCardContainer>
        {companies.map((company) => {
          return (
            <CompanyCard key={company}>
              <CompanyLogo
                src={`/assets/icons/companies/${company
                  .replace(/\s+/g, '-')
                  .toLowerCase()}.png`}
                alt={`${company}-logo`}
              />
              <Details>
                <Title>{company}</Title>
                <Description>{CompanyDescriptions[company]}</Description>
              </Details>
            </CompanyCard>
          )
        })}
      </CompanyCardContainer>
    </>
  )
}
