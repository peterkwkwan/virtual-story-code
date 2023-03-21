import React from 'react'
import styled from 'styled-components'

export const TextInput = styled.input`
  color: ${(props) => props.theme.palette.text01};
  background-color: ${(props) => props.theme.palette.dark04};
  height: 22px;
  line-height: 18px;
  width: calc(100% - 18px - 20px);
  margin: 0 12px 0 20px;
  padding-left: 4px;
  outline: none;
  border: 1px solid transparent;
  ::placeholder {
    color: ${(props) => props.theme.palette.text03};
  }
  :focus {
    border: ${(props) => '1px solid ' + props.theme.palette.selectedBlueBorder};
  }
`
