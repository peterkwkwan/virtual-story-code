import React from 'react'
import styled from 'styled-components'

import { BlogLinks, Blogs } from './shared/constants'
import { BlogsPagePaths } from './BlogRouterConfig'
import { BlogSidebarButton } from './BlogSidebarButton'

const MyBlogs = [
  {
    title: Blogs.GO_FAST_GO_SMOOTH,
    date: 'Apr 27, 2023',
    url: BlogLinks[Blogs.GO_FAST_GO_SMOOTH],
    internalPath: BlogsPagePaths.BLOG_GO_FAST_GO_SMOOTH,
  },
  {
    title: Blogs.CHATGPT_SUPERCHARGE,
    date: 'Feb 19, 2023',
    url: BlogLinks[Blogs.CHATGPT_SUPERCHARGE],
    internalPath: BlogsPagePaths.BLOG_CHATGPT_SUPERCHARGE,
  },
  {
    title: Blogs.FIVE_JS_FEATURES,
    date: 'Feb 14, 2023',
    url: BlogLinks[Blogs.FIVE_JS_FEATURES],
    internalPath: BlogsPagePaths.BLOG_FIVE_JS_FEATURES,
  },
  {
    title: Blogs.FIVE_TIPS,
    date: 'Jun 16, 2022',
    url: BlogLinks[Blogs.FIVE_TIPS],
    internalPath: BlogsPagePaths.BLOG_FIVE_TIPS,
  },
  {
    title: Blogs.IMPOSTOR,
    date: 'May 29, 2022',
    url: BlogLinks[Blogs.IMPOSTOR],
    internalPath: BlogsPagePaths.BLOG_IMPOSTOR,
  },
]

const Container = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const BlogCount = styled.div`
  margin: 0 20px 14px 20px;
  padding-top: 8px;
  font-size: 13px;
  color: rgba(204, 204, 204, 0.65);
  border-top: 1px solid ${(props) => props.theme.palette.divider};
`

export const BlogSidebar = () => {
  return (
    <Container>
      <BlogCount>{MyBlogs.length} articles found</BlogCount>
      {MyBlogs.map((blog) => (
        <BlogSidebarButton key={blog.internalPath} {...blog} />
      ))}
    </Container>
  )
}
