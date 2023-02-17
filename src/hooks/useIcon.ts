export const useIcon = (value: string) => {
  const suffix = value.split('.').pop()

  let pathName = ''

  switch (suffix) {
    case 'tsx':
      pathName = '/assets/icons/reactts.svg'
      break
    case 'html':
      pathName = '/assets/icons/html.svg'
      break
    case 'scss':
      pathName = '/assets/icons/scss.svg'
      break
    case 'md':
      pathName = '/assets/icons/text.svg'
      break
    case 'test':
      pathName = '/assets/icons/test.svg'
      break
    case 'json':
      pathName = '/assets/icons/json.svg'
      break
    default:
      pathName = '/assets/icons/git.svg'
  }
  return pathName
}
