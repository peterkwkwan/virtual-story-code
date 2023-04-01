import React from 'react'
import styled from 'styled-components'

import { Companies } from '@/constants/companies'

const Container = styled.div`
  width: 60%;
`

const Intro = styled.p`
  margin: 0;
`

const CompanyCardContainer = styled.div`
  margin-top: 16px;
`

const CompanyCard = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  color: ${(props) => props.theme.palette.text02};
  :not(:first-of-type) {
    margin-top: 12px;
  }
  :hover {
    color: ${(props) => props.theme.palette.text01};
    > span {
      border-bottom: 1px solid ${(props) => props.theme.palette.text01};
    }
    > img {
      filter: brightness(100%);
    }
  }
`

const CompanyLogo = styled.img`
  width: 48px;
  filter: brightness(80%);
`
const Title = styled.span`
  margin-left: 12px;
  border-bottom: 1px solid transparent;
`

interface Props {
  companies: Companies[]
  title: string
}

export const WorkExperience = ({ companies, title }: Props) => {
  return (
    <Container>
      <Intro>I have experience in {title} at these previous positions:</Intro>
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
              <Title>{company}</Title>
            </CompanyCard>
          )
        })}
      </CompanyCardContainer>
    </Container>
  )
}
