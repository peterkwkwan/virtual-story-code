import styled from 'styled-components';

const BaseText = styled.span`
  line-height: 18px;
`

export const PurpleText = styled(BaseText)`
  color: ${(props) => props.theme.color.purpleText};
`;

export const StringText = styled(BaseText)`
  color: ${(props) => props.theme.color.stringText};
`;

export const LightBlueText = styled(BaseText)`
  color: ${(props) => props.theme.color.lightBlueText};
`;

export const DarkBlueText = styled(BaseText)`
  color: ${(props) => props.theme.color.darkBlueText};
`;

export const BlueText = styled(BaseText)`
  color: ${(props) => props.theme.color.blueText};
`;

export const LightYellowText = styled(BaseText)`
  color: ${(props) => props.theme.color.lightYellowText};
`;

export const YellowText = styled(BaseText)`
  color: ${(props) => props.theme.color.yellowText};
`;

export const GreenText = styled(BaseText)`
  color: ${(props) => props.theme.color.greenText};
`;

export const CommentGreen = styled(BaseText)`
  color: ${(props) => props.theme.color.commentGreen};
`;  

export const MutedGreenText = styled(BaseText)`
  color: ${(props) => props.theme.color.mutedGreenText};
`;

export const YellowBrackets = styled(BaseText)`
  color: ${(props) => props.theme.color.yellowBrackets};
`;

export const Indent = styled.div`
  border-left: 1px solid #515151;
  padding-left: 16px; 
`;

export const LineBreak = styled.div`
  height: 18px;
`