import styled from "styled-components";

export const BaseText = styled.span`
  line-height: 18px;
`;

export const PurpleText = styled(BaseText)`
  color: ${(props) => props.theme.palette.purpleText};
`;

export const StringText = styled(BaseText)`
  color: ${(props) => props.theme.palette.stringText};
`;

export const LightBlueText = styled(BaseText)`
  color: ${(props) => props.theme.palette.lightBlueText};
`;

export const DarkBlueText = styled(BaseText)`
  color: ${(props) => props.theme.palette.darkBlueText};
`;

export const BlueText = styled(BaseText)`
  color: ${(props) => props.theme.palette.blueText};
`;

export const LightYellowText = styled(BaseText)`
  color: ${(props) => props.theme.palette.lightYellowText};
`;

export const YellowText = styled(BaseText)`
  color: ${(props) => props.theme.palette.yellowText};
`;

export const GreenText = styled(BaseText)`
  color: ${(props) => props.theme.palette.greenText};
`;

export const CommentGreen = styled(BaseText)`
  color: ${(props) => props.theme.palette.commentGreen};
`;

export const MutedGreenText = styled(BaseText)`
  color: ${(props) => props.theme.palette.mutedGreenText};
`;

export const YellowBrackets = styled(BaseText)`
  color: ${(props) => props.theme.palette.yellowBrackets};
`;

export const AngleBrackets = styled(BaseText)`
  color: ${(props) => props.theme.palette.angleBrackets};
`;

export const Indent = styled.div`
  border-left: 1px solid #515151;
  padding-left: 16px;
`;

export const LineBreak = styled.div`
  height: 18px;
`;
