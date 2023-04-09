export const useIcon = (value: string) => {
  if (value.includes('Skill:')) {
    return '/assets/icons/extensions/skillList.svg'
  }
  if (value.includes('Blog:')) {
    return '/assets/icons/edit.svg'
  }

  const suffix = value.split('.').pop()

  switch (suffix) {
    case 'tsx':
      return '/assets/icons/reactts.svg'
    case 'html':
      return '/assets/icons/html.svg'
    case 'scss':
      return '/assets/icons/scss.svg'
    case 'md':
      return '/assets/icons/text.svg'
    case 'test':
      return '/assets/icons/test.svg'
    case 'json':
      return '/assets/icons/json.svg'
    case 'me':
      return '/assets/icons/feedback.svg'
    default:
      return '/assets/icons/git.svg'
  }
}
