import React from 'react'
import styled from 'styled-components'

import { IDENTITY } from '../shared/constants'

import { useStore } from '@/hooks/useStore'

type Props = {
  triggerFirstTransform: boolean
  triggerSecondTransform: boolean
  triggerThirdTransform: boolean
}

const Ship = styled.div<Props>`
  position: absolute;
  top: 50%;
  right: 20vw;
  height: 50px;
  width: 50px;
  background-color: white;
  transform: rotate(0deg) translateX(0px) rotate(0deg);
  transform: ${(props) =>
    props.triggerFirstTransform &&
    'rotate(120deg) translateX(20vw) rotate(-180deg)'};
  transform: ${(props) =>
    props.triggerSecondTransform &&
    'rotate(200deg) translateX(35vw) rotate(-270deg)'};
  transform: ${(props) =>
    props.triggerThirdTransform &&
    'rotate(360deg) translateX(0px) rotate(-360deg)'};
  transition: all 2s;
  /* Transform: ${(props) => props.triggerSecondTransform && 'second'}; */
  /* Transform: ${(props) => props.triggerThirdTransform && 'third'}; */
`

export const Shipspace = () => {
  const visibility = useStore((state) => state.visibility)
  const triggerFirstTransform = visibility[IDENTITY.EAT]
  const triggerSecondTransform = visibility[IDENTITY.SLEEP]
  const triggerThirdTransform = visibility[IDENTITY.CODE]
  const props = {
    triggerFirstTransform,
    triggerSecondTransform,
    triggerThirdTransform,
  }

  return <Ship {...props} />
}
