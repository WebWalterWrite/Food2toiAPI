import styled from "styled-components/macro";
import { media } from '../../styles/responsive.styled';



const Styles = props => ({
  style:{
  height: props.height ? props.height :  "",
  fontSize: props.fontSize + "px",
  transform: props.transform,
  opacity: props.opacity || 1,
  right: props.right + "%",
  left: props.left + "%",
  bottom: props.bottom + "%",
  filter: `blur(${props.blur + "px"})`
  }
});

export const Div = styled.div.attrs(Styles)`
  color: white;
  text-align: center;
  font-family: Lily Script One, cursive;
  ${media.desktopL`font-size: 78px;`};
  ${media.desktopM`font-size: 78px;`};
  ${media.phone`font-size: 28px;`};
  
`;

export const DivLayer = styled.div.attrs(Styles)`
  position: absolute;
  width: ${props => props.width + "%"};
  ${media.phone`
    filter: none !important;
  `}
`;

