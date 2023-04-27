import styled from 'styled-components'

const BtnSpan = styled.span`
  position: absolute;
  display: block;
`

const StyledButton = styled.button`
  --background-color: ${(props) => props.theme.palette.white};
  --span-color: ${(props) => props.theme.palette.vsCodeBlue};
  --hover-color: ${(props) => props.theme.palette.text01};
  color: ${(props) => props.theme.palette.text04};
  font-family: League Spartan;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 1.2rem;
  cursor: pointer;
  background: var(--background-color);
  padding: 0.87rem 2rem;
  border: 0;
  position: relative;
  isolation: isolate;
  display: inline-block;
  overflow: hidden;
  transition: 0.2s;
  color: ${(props) => props.theme.palette.dark01};

  &:hover {
    color: #fff;
    background: var(--span-color);
    box-shadow: 0 0 4px var(--hover-color), 0 0 8px var(--hover-color),
      0 0 16px var(--hover-color);
    transition-delay: 1s;
  }

  ${BtnSpan}:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--span-color));
  }
  &:hover ${BtnSpan}:nth-child(1) {
    left: 100%;
    transition: 1s;
  }
  ${BtnSpan}:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, var(--span-color));
  }
  &:hover ${BtnSpan}:nth-child(2) {
    top: 100%;
    transition: 1s;
    transition-delay: 0.25s;
  }
  ${BtnSpan}:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, var(--span-color));
  }
  &:hover ${BtnSpan}:nth-child(3) {
    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
  }
  ${BtnSpan}:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, var(--span-color));
  }
  &:hover ${BtnSpan}:nth-child(4) {
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.75s;
  }
  animation: grow 1.1s ease-in;
  -webkit-animation: grow 1.1s ease-in;
  @keyframes grow {
    0% {
      transform: scale(0.03, 0.08);
      color: transparent;
    }
    25% {
      transform: scale(0.03, 0.08);
    }
    75% {
      color: transparent;
    }
    80% {
      transform: scale(1, 0.08);
      color: ${(props) => props.theme.palette.dark01};
    }
    100% {
      transform: scale(1, 1);
    }
  }
`

interface Props {
  title: string
  onClick: () => void
  onMouseOver?: () => void
  onMouseLeave?: () => void
}

export const LoadingButton = ({
  title,
  onClick,
  onMouseOver,
  onMouseLeave,
}: Props) => {
  const onMouseOverHandler = () => {
    onMouseOver && onMouseOver()
  }

  const onMouseLeaveHandler = () => {
    onMouseLeave && onMouseLeave()
  }

  return (
    <StyledButton
      aria-label="Enter site"
      onMouseOver={onMouseOverHandler}
      onMouseLeave={onMouseLeaveHandler}
      onClick={onClick}
    >
      <BtnSpan></BtnSpan>
      <BtnSpan></BtnSpan>
      <BtnSpan></BtnSpan>
      <BtnSpan></BtnSpan>
      {title}
    </StyledButton>
  )
}
