import styled from 'styled-components'

import { TextInput } from '@/components/elements/TextInput'

export const ExtensionsSearchBox = () => {
  return (
    <form spellCheck="false">
      <TextInput placeholder="Search Peter's skills" />
    </form>
  )
}
