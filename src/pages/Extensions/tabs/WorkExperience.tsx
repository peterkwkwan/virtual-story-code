import React from 'react'
import styled from 'styled-components'

import { Companies, CompanyDescriptions } from '@/constants/companies'
import { UnstyledLink } from '@/components/elements/UnstyledLink'
import SkeletonImage from '@/components/elements/SkeletonImage'

const Intro = styled.p`
  margin: 0;
`

const CompanyCardContainer = styled.div`
  margin-top: 16px;
  a {
    width: 100%;
    :not(:first-of-type) {
      display: inline-block;
      margin-top: 20px;
    }
  }
`

const CompanyCard = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  color: ${(props) => props.theme.palette.text02};

  :hover {
    color: ${(props) => props.theme.palette.text01};
    h6:first-of-type {
      border-bottom: 1px solid ${(props) => props.theme.palette.text01};
    }
    > img {
      filter: brightness(100%);
    }
  }
`

const Details = styled.div`
  margin-left: 12px;
  overflow: hidden;
`

const Title = styled.h6`
  margin: 0;
  font-size: 1rem;
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

function toKebabCase(word: string) {
  return word.replace(/\s+/g, '-').toLowerCase()
}

export const WorkExperience = ({ companies, title }: Props) => {
  const isSingular = companies.length === 1

  return (
    <>
      <Intro>
        I have experience with {title} at {isSingular ? 'this' : 'these'}&nbsp;
        {isSingular ? 'company' : 'companies'}:
      </Intro>
      <CompanyCardContainer>
        {companies.map((company) => {
          return (
            <UnstyledLink
              key={company}
              path={`/explorer/${toKebabCase(company)}`}
            >
              <CompanyCard>
                <SkeletonImage
                  src={`/assets/icons/companies/${toKebabCase(company)}.webp`}
                  alt={`${company}-logo`}
                  width={48}
                  height={48}
                  style={{ filter: 'brightness(80%)' }}
                />
                <Details>
                  <Title>{company}</Title>
                  <Description>{CompanyDescriptions[company]}</Description>
                </Details>
              </CompanyCard>
            </UnstyledLink>
          )
        })}
      </CompanyCardContainer>
    </>
  )
}
