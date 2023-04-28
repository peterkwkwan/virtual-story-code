import { RouterConfig } from '../shared/routerConfig'
import { BlogSnippet, Blogs } from './shared/constants'

export enum BlogsPagePaths {
  BLOG_IMPOSTOR = 'blog/overcoming-impostor-syndrome',
  BLOG_FIVE_TIPS = 'blog/tips-for-aspiring-developers',
  BLOG_FIVE_JS_FEATURES = 'blog/js-features-you-have-not-used',
  BLOG_CHATGPT_SUPERCHARGE = 'blog/chatgpt-supercharge-development-process',
  BLOG_GO_FAST_GO_SMOOTH = 'blog/make-your-website-go-fast-and-buttery-smooth',
}
export enum BlogPageNames {
  BLOG_IMPOSTOR = 'Blog: Overcoming Impostor Syndrome',
  BLOG_FIVE_TIPS = 'Blog: 5 Tips for Aspiring Developers',
  BLOG_FIVE_JS_FEATURES = 'Blog: 5 JavaScript features you (probably) haven’t used',
  BLOG_CHATGPT_SUPERCHARGE = 'Blog: 4 Ways ChatGPT can supercharge your development process',
  BLOG_GO_FAST_GO_SMOOTH = 'Blog: How to make your website go FAST and buttery SMOOTH',
}

type BlogConfig = RouterConfig
export const BlogList: BlogConfig[] = [
  {
    fileName: BlogPageNames.BLOG_IMPOSTOR,
    path: BlogsPagePaths.BLOG_IMPOSTOR,
    component: () => BlogSnippet[Blogs.IMPOSTOR],
  },
  {
    fileName: BlogPageNames.BLOG_FIVE_TIPS,
    path: BlogsPagePaths.BLOG_FIVE_TIPS,
    component: () => BlogSnippet[Blogs.FIVE_TIPS],
  },
  {
    fileName: BlogPageNames.BLOG_FIVE_JS_FEATURES,
    path: BlogsPagePaths.BLOG_FIVE_JS_FEATURES,
    component: () => BlogSnippet[Blogs.FIVE_JS_FEATURES],
  },
  {
    fileName: BlogPageNames.BLOG_CHATGPT_SUPERCHARGE,
    path: BlogsPagePaths.BLOG_CHATGPT_SUPERCHARGE,
    component: () => BlogSnippet[Blogs.CHATGPT_SUPERCHARGE],
  },
  {
    fileName: BlogPageNames.BLOG_GO_FAST_GO_SMOOTH,
    path: BlogsPagePaths.BLOG_GO_FAST_GO_SMOOTH,
    component: () => BlogSnippet[Blogs.GO_FAST_GO_SMOOTH],
  },
]
