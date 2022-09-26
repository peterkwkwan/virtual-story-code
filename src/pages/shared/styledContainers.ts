import styled from 'styled-components'

export const BaseContentContainer = styled.div`
  width: calc(100vw - 348px);
  height: 100%;
  display: flex;
  background: ${(props) => props.theme.palette.dark01};
  color: ${(props) => props.theme.palette.text01};
  overflow: auto;
`

export const ViewletContainer = styled.aside`
  background-color: ${(props) => props.theme.palette.dark03};
  height: 100%;
  width: 300px;
  color: ${(props) => props.theme.palette.text01};
`
