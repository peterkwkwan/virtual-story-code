import React from 'react'
import styled from 'styled-components'

import { BlogLinks, Blogs } from './shared/constants'

const MyBlogs = [
  {
    title: Blogs.CHATGPT_SUPERCHARGE,
    date: 'Feb 19, 2023',
    url: BlogLinks[Blogs.CHATGPT_SUPERCHARGE],
  },
  {
    title: Blogs.FIVE_JS_FEATURES,
    date: 'Feb 14, 2023',
    url: BlogLinks[Blogs.FIVE_JS_FEATURES],
  },
  {
    title: Blogs.FIVE_TIPS,
    date: 'Jun 16, 2022',
    url: BlogLinks[Blogs.FIVE_TIPS],
  },
  {
    title: Blogs.IMPOSTOR,
    date: 'May 29, 2022',
    url: BlogLinks[Blogs.IMPOSTOR],
  },
]

const Container = styled.div`
  font-family: SF-Pro, sans-serif;
`

const BlogCount = styled.div`
  margin: 0 20px 14px 20px;
  padding-top: 8px;
  font-size: 13px;
  color: rgba(204, 204, 204, 0.65);
  border-top: 1px solid ${(props) => props.theme.palette.divider};
`

const BlogItem = styled.div`
  padding: 4px 0 4px 20px;
  a,
  span,
  button {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :not(:first-of-type) {
    margin-top: 8px;
  }
  :hover {
    background-color: ${(props) => props.theme.palette.grey};
  }
`

const BlogButton = styled.div`
  cursor: pointer;
  span {
    user-select: none;
  }
`

const BlogTitle = styled.span`
  display: block;
  user-select: none;
  font-size: 0.875rem;
  width: 100%;
  color: ${(props) => props.theme.palette.text01};
`

const BlogDate = styled.span`
  font-size: 0.8rem;
  font-weight: 200;
  color: ${(props) => props.theme.palette.text04};
`

const BlogLink = styled.a`
  display: block;
  color: ${(props) => props.theme.palette.text03};
  font-size: 0.75rem;
  text-decoration: none;
  user-select: none;
  :hover {
    color: ${(props) => props.theme.palette.text02};
    text-decoration: underline;
  }
`

export const BlogSidebar = () => {
  return (
    <Container>
      <BlogCount>{MyBlogs.length} articles found</BlogCount>
      {MyBlogs.map((blog) => (
        <BlogItem key={blog.url}>
          <BlogButton>
            <BlogTitle>{blog.title}</BlogTitle>
            <BlogDate>{blog.date}</BlogDate>
          </BlogButton>
          <BlogLink href={blog.url} target="_blank">
            {blog.url}
          </BlogLink>
        </BlogItem>
      ))}
    </Container>
  )
}
