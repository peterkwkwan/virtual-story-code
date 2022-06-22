import styled from "styled-components";

interface IconProps {
    height: number
    width: number
}

export const Icon = styled.img<IconProps>`
  height: ${props => props.height + 'px'};
  width: ${props => props.width + 'px'};  
  padding: 0 4px 0 0;
`;

export const TextBox = styled.div`
  background-color: ${(props) => props.theme.color.dark04};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
  padding-left: 4px;
  border: ${(props) => "1px solid " + props.theme.color.selectedBlueBorder};
`;

export const TextField = styled.div`
  font-size: 13px;
  cursor: text;
  font-family: SF-Pro, sans-serif;
  line-height: 18px;
  letter-spacing: 0.3px;
`;
