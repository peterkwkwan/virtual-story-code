import styled from 'styled-components'

const TabButton = styled.button<{ active: boolean }>`
  padding: 9px 10px;
  background: transparent;
  cursor: pointer;
  border: none;
  border-bottom: ${(props) =>
    props.active ? '1px solid ' + props.theme.palette.text01 : 'none'};
  color: ${(props) =>
    props.active ? props.theme.palette.text01 : props.theme.palette.text03};
  :hover {
    color: ${(props) => props.theme.palette.text01};
  }
`

interface TabProps {
  label: string
  onClick: () => void
  isActive: boolean
}

export const Tab = ({ label, onClick, isActive }: TabProps) => {
  return (
    <TabButton active={isActive} onClick={onClick}>
      {label}
    </TabButton>
  )
}
