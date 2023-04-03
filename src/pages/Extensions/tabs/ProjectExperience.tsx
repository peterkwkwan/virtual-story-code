import React from 'react'
import styled from 'styled-components'

import { ProjectDescriptions, Projects } from '@/constants/projects'

const Intro = styled.p`
  margin: 0;
`

const ProjectCardContainer = styled.div`
  margin-top: 16px;
  width: 100%;
`

const ProjectCard = styled.div`
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

const ProjectLogo = styled.img`
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
  projects: Projects[]
  title: string
}

export const ProjectExperience = ({ projects, title }: Props) => {
  const isSingular = projects.length === 1
  return (
    <>
      <Intro>
        I have experience in {title} in {isSingular ? 'this' : 'these'}&nbsp;
        {isSingular ? 'project' : 'projects'}:
      </Intro>
      <ProjectCardContainer>
        {projects.map((project) => {
          return (
            <ProjectCard key={project}>
              <ProjectLogo
                src={`/assets/icons/projects/${project
                  .replace(/\s+/g, '-')
                  .toLowerCase()}.png`}
                alt={`${project}-logo`}
              />
              <Details>
                <Title>{project}</Title>
                <Description>{ProjectDescriptions[project]}</Description>
              </Details>
            </ProjectCard>
          )
        })}
      </ProjectCardContainer>
    </>
  )
}
