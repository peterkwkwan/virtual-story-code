import styled from 'styled-components'

import { TextInput } from '@/components/elements/TextInput'
import { useBoundStore } from '@/hooks/useBoundStore'

export const ExtensionsSearchBox = () => {
  const setSearchValue = useBoundStore((state) => state.setSearchValueSlice)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }
  return (
    <form spellCheck="false">
      <TextInput placeholder="Search Peter's skills" onChange={handleChange} />
    </form>
  )
}
