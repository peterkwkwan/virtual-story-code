import React from 'react'

import { BlogLinks, Blogs } from './shared/constants'

const MyBlogs = [
  {
    title: Blogs.IMPOSTER,
    link: BlogLinks[Blogs.IMPOSTER],
  },
  {
    title: Blogs.FIVE_TIPS,
    link: BlogLinks[Blogs.FIVE_TIPS],
  },
  {
    title: Blogs.FIVE_JS_FEATURES,
    link: BlogLinks[Blogs.FIVE_JS_FEATURES],
  },
  {
    title: Blogs.CHATGPT_SUPERCHARGE,
    link: BlogLinks[Blogs.CHATGPT_SUPERCHARGE],
  },
]

export const BlogSidebar = () => {
  return (
    <div>
      {MyBlogs.map((blog) => (
        <div key={blog.link}>{blog.title}</div>
      ))}
    </div>
  )
}
