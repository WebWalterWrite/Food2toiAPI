import styled from "styled-components/macro";
import { media } from "../../styles/responsive.styled";


export const Choice = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	div {
		position: relative;
		display: flex;
    align-items: center;
    margin: 1em;
    border-top: solid 1px #ffffff;
    overflow:hidden;

    :hover img {
      transition: transform .5s ease-in-out;
			transform: scale(1);
      }
    :hover h4{
      line-height:10;
    }
		img {
			flex-shrink: 0;
			min-width: 100%;
      min-height: 100%;
    	transform: scale(1.2);
		}
		h4 {
      position: absolute;
      z-index:999;
			width: 100%;
			height: 100%;
			line-height: 2;
			color: #FFFFFF;
      cursor: pointer;
			transition: all .5s ease-in-out;
			
		}
	}
`;

export const Div = styled.div`
	letter-spacing: 4px;
	font-family: Lily Script One, cursive;
	color: #fff;
	text-align: center;
	h1 {
		${media.phone`font-size: 48px;`};
		${media.desktopM`font-size: 18px;`};
		${media.desktopL`font-size: 78px;`};
	}
	p {
		background-color: rgba(0, 0, 0, 0.8);
		width: 50%;
		margin: 0 auto;
		text-align: left;
		line-height: 1.8;
		padding: 20px;

		${media.desktopM`font-size: 32px !important;`};
		${media.phone`font-size: 24px !important; width:90%`};
	}
	button{
		margin-top: 1em;
		padding:20px;
		background-color: #ef0078;
		color: #FFFFFF;
		outline: none;
		font-size: 18px;
	}
`;

export const CarrouselImg = styled.div`
	overflow:hidden;
`;
