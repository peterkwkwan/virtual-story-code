import styled from "styled-components";

export const BaseContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${(props) => props.theme.color.dark01};
  color: ${(props) => props.theme.color.text01};
  overflow: scroll;
`;


export const ViewletContainer = styled.aside`
  background-color: ${(props) => props.theme.color.dark03};
  height: 100%;
  width: 300px;
  color: ${(props) => props.theme.color.text01};
`;
