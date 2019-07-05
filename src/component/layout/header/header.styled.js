import styled from "styled-components";
import { media } from "../../../styles/responsive.styled";

export const Title = styled.h1`
  background-color: black;
  color: white;
  font-family: Viga;
  letter-spacing: 3px;
  ${media.desktopL`font-size: 3em;`};
  ${media.phone`font-size: 2em; text-align:center;`};
`;

export const Span = styled.span`
    color: #4fee76; 
}`;
//#ef0078
export const FontSpan = styled(Span)`
  font-size: 32px;
`;
