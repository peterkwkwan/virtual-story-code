import styled from "styled-components";

export const BaseContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${(props) => props.theme.color.dark01};
  color: ${(props) => props.theme.color.text01};
  overflow: scroll;
`;
