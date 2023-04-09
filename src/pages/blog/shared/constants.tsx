import { Impostor } from '../blog-content/Impostor'
import { FiveTips } from '../blog-content/FiveTips'
import { FiveJsFeatures } from '../blog-content/FiveJsFeatures'
import { ChatGptSupercharge } from '../blog-content/ChatGptSupercharge'

export enum Blogs {
  IMPOSTOR = 'Overcoming Impostor Syndrome',
  FIVE_TIPS = '5 Tips for Aspiring Developers',
  FIVE_JS_FEATURES = '5 JavaScript features you (probably) haven’t used',
  CHATGPT_SUPERCHARGE = '4 Ways ChatGPT can supercharge your development process',
}

export const BlogLinks: { [key: string]: string } = {
  [Blogs.IMPOSTOR]:
    'https://medium.com/codex/self-taught-perspectives-how-to-overcome-impostor-syndrome-13166ff28c81',
  [Blogs.FIVE_TIPS]:
    'https://medium.com/codex/5-tips-for-aspiring-developers-7bba426072fa',
  [Blogs.FIVE_JS_FEATURES]:
    'https://medium.com/codex/5-javascript-features-you-probably-havent-used-85d5dfcb8dc1',
  [Blogs.CHATGPT_SUPERCHARGE]:
    'https://medium.com/codex/4-ways-chatgpt-can-supercharge-your-development-process-750a58390510',
}

export const BlogSnippet = {
  [Blogs.IMPOSTOR]: <Impostor />,
  [Blogs.FIVE_TIPS]: <FiveTips />,
  [Blogs.FIVE_JS_FEATURES]: <FiveJsFeatures />,
  [Blogs.CHATGPT_SUPERCHARGE]: <ChatGptSupercharge />,
}
