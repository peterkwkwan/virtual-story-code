import React from 'react'
import styled from 'styled-components'

import { ProjectDetails, Projects } from '@/constants/projects'

const Intro = styled.p`
  margin: 0;
`

const ProjectCardContainer = styled.div`
  margin-top: 16px;
  width: 100%;
`

const ProjectCard = styled.div`
  width: 100%;
  cursor: default;
  user-select: none;
  color: ${(props) => props.theme.palette.text02};
  filter: brightness(80%);

  :not(:first-of-type) {
    margin-top: 20px;
  }
  :hover {
    filter: brightness(100%);
    color: ${(props) => props.theme.palette.text01};
  }
`

const Title = styled.h6`
  font-size: 1rem;
  margin: 0;
  font-weight: 700;
  border-bottom: 1px solid transparent;
  width: fit-content;
`

const Description = styled.p`
  margin: 0;
  font-weight: 200;
  font-size: 0.875rem;
  color: ${(props) => props.theme.palette.text02};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
`

const Icon = styled.img`
  width: 12px;
  height: 12px;
`

const StyledAnchor = styled.a`
  display: inline-block;
  margin: 4px 0 0 6px;
  color: ${(props) => props.theme.palette.text03};
  text-decoration: none;
  :hover {
    color: ${(props) => props.theme.palette.text02};
    text-decoration: underline;
  }
`

interface Props {
  projects: Projects[]
  title: string
}

const isGitHub = (urlText: string) => {
  return urlText === 'GitHub'
}

export const ProjectExperience = ({ projects, title }: Props) => {
  const isSingular = projects.length === 1
  return (
    <>
      <Intro>
        I have experience with {title} in {isSingular ? 'this' : 'these'}&nbsp;
        {isSingular ? 'project' : 'projects'}:
      </Intro>
      <ProjectCardContainer>
        {projects.map((project) => {
          return (
            <ProjectCard key={project}>
              <Title>{project}</Title>
              <Description>{ProjectDetails[project].description}</Description>
              <div>
                {isGitHub(ProjectDetails[project].urlText) ? (
                  <Icon
                    src="/assets/icons/search/GitHub.svg"
                    alt="GitHub logo"
                  />
                ) : (
                  <Icon src="/assets/icons/link-external.svg" alt="redirect" />
                )}
                <StyledAnchor
                  href={ProjectDetails[project].url}
                  target="_blank"
                >
                  {ProjectDetails[project].urlText}
                </StyledAnchor>
              </div>
            </ProjectCard>
          )
        })}
      </ProjectCardContainer>
    </>
  )
}
