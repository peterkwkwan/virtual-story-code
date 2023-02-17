import React from 'react'
import styled from 'styled-components'

import { ResultFile } from './ResultFile'
import { HyperLink } from './shared/constants'

const ResultSummary = styled.div`
  margin: 14px 0 14px 20px;
  font-size: 13px;
  color: rgba(204, 204, 204, 0.65);
`

const Icon = styled.img`
  height: 0.75rem;
  width: 0.75rem;
  padding-right: 6px;
`

enum Results {
  GITHUB = 'GitHub',
  LINKEDIN = 'LinkedIn',
  MEDIUM = 'Medium',
  RESUME = 'Resume',
}

const getIconPath = (title: Results) => {
  return `/assets/icons/search/${title}.svg`
}

const results = [
  {
    icon: <Icon src={getIconPath(Results.GITHUB)} />,
    title: Results.GITHUB,
    hyperlink: HyperLink.GITHUB,
  },
  {
    icon: <Icon src={getIconPath(Results.LINKEDIN)} />,
    title: Results.LINKEDIN,
    hyperlink: HyperLink.LINKEDIN,
  },
  {
    icon: <Icon src={getIconPath(Results.MEDIUM)} />,
    title: Results.MEDIUM,
    hyperlink: HyperLink.MEDIUM,
  },
  {
    icon: <Icon src={getIconPath(Results.RESUME)} />,
    title: Results.RESUME,
    hyperlink: HyperLink.RESUME,
  },
]
export const SearchResult = () => {
  return (
    <div>
      <ResultSummary>4 results in 4 files</ResultSummary>
      {results.map((result) => (
        <ResultFile key={result.title} {...result} />
      ))}
    </div>
  )
}
