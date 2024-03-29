import styled from 'styled-components'

interface IconProps {
  height: number
  width: number
}

export const Icon = styled.img<IconProps>`
  height: ${(props) => props.height + 'px'};
  width: ${(props) => props.width + 'px'};
  padding: 0 4px 0 0;
`

export const TextBox = styled.div`
  background-color: ${(props) => props.theme.palette.dark04};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
  padding-left: 4px;
  margin: 0 12px 0 20px;
  border: ${(props) => '1px solid ' + props.theme.palette.selectedBlueBorder};
`
