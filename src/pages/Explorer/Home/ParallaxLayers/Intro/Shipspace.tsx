import React from 'react'
import styled from 'styled-components'

import { IDENTITY } from '../shared/constants'

import { useStore } from '@/hooks/useStore'

type Props = {
  triggerFirstTransform: boolean
  triggerSecondTransform: boolean
  triggerThirdTransform: boolean
  speechBubbleVisible: boolean
}

const Ship = styled.div<Props>`
  position: absolute;
  top: 0;
  right: 0;
  height: 50px;
  width: 50px;
  background-color: white;
  right: ${(props) => props.triggerFirstTransform && '20%'};
  top: ${(props) => props.triggerFirstTransform && '20%'};
  right: ${(props) => props.triggerSecondTransform && '40%'};
  top: ${(props) => props.triggerSecondTransform && '40%'};
  right: ${(props) => props.triggerThirdTransform && '60%'};
  top: ${(props) => props.triggerThirdTransform && '60%'};
  right: ${(props) => props.speechBubbleVisible && '80%'};
  top: ${(props) => props.speechBubbleVisible && '80%'};
  transition: all 2s;
`

export const Shipspace = () => {
  const visibility = useStore((state) => state.visibility)

  const triggerFirstTransform = visibility[IDENTITY.EAT]
  const triggerSecondTransform = visibility[IDENTITY.SLEEP]
  const triggerThirdTransform = visibility[IDENTITY.CODE]
  const speechBubbleVisible = visibility['speechBubbleStart']
  const props = {
    triggerFirstTransform,
    triggerSecondTransform,
    triggerThirdTransform,
    speechBubbleVisible,
  }

  return <Ship {...props} />
}
