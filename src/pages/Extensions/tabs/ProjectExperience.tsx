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
  width: 100%;
  cursor: pointer;
  color: ${(props) => props.theme.palette.text02};
  filter: brightness(80%);

  :not(:first-of-type) {
    margin-top: 20px;
  }
  :hover {
    filter: brightness(100%);

    color: ${(props) => props.theme.palette.text01};
    h6:first-of-type {
      border-bottom: 1px solid ${(props) => props.theme.palette.text01};
    }
  }
`

const Title = styled.h6`
  font-size: 1rem;
  margin: 0;
  font-weight: 700;
  border-bottom: 1px solid transparent;
  width: fit-content;
`

const ProjectType = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.palette.text03};
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
              <Title>{project}</Title>
              <ProjectType>Personal</ProjectType>
              <Description>{ProjectDescriptions[project]}</Description>
            </ProjectCard>
          )
        })}
      </ProjectCardContainer>
    </>
  )
}
