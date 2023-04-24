import React from 'react'
import styled from 'styled-components'

import { Icon, TextBox } from './shared/styled'

import { TextField } from '@/components/elements/TextField'

const ReplaceContainer = styled(TextBox)`
  margin: 6px 4px 0 20px;
  border: none;
  width: 242px;
`
const ReplaceBox = styled(TextField)`
  color: ${(props) => props.theme.palette.text03};
`
export const ReplaceField = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <ReplaceContainer>
        <ReplaceBox>Replace</ReplaceBox>
        <Icon
          height={20}
          width={20}
          alt="replace"
          src="/assets/icons/search/replace-icon.webp"
        />
      </ReplaceContainer>
      <Icon
        height={20}
        width={20}
        alt="replace"
        src="/assets/icons/search/replace-icon2.webp"
      />
    </div>
  )
}
