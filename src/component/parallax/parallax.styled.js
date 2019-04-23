import styled from "styled-components";

const Styles = props => ({
  height: props.height ? props.height :  "",
  fontSize: props.fontSize + "px",
  transform: props.transform,
  opacity: props.opacity || 1,
  right: props.right + "%",
  left: props.left + "%",
  bottom: props.bottom + "%",
  filter: `blur(${props.blur + "px"})`
});

export const Div = styled.div.attrs({ style: Styles })`
  color: white;
  text-align: center;
  font-family: Lily Script One, cursive;
`;

export const DivLayer = styled.div.attrs({
  style: Styles
})`
  position: absolute;
  width: ${props => props.width + "%"};
`;

