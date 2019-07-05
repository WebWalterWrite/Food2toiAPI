import styled from "styled-components/macro";
import { media } from "../../styles/responsive.styled";


export const Choice = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	${media.phone`
		margin-top:20%;
	`}
	div {
		position:relative;
		display: flex;
    align-items: center;
    margin: 1em;
    :hover h4{
      line-height:10;
    }
		img {
			flex-shrink: 0;
			min-width: 100%;
      min-height: 100%;
    	transform: scale(1.2);
			${media.phone`
				width: 150px !important;
		`}
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
			${media.desktopL`font-size: 48px;`};
			${media.desktopM`font-size: 38px;`};
			${media.phone`font-size: 28px;`};
			
		}
	}
`;

export const Title = styled.h1`
		${media.desktopL`font-size: 78px;`};
		${media.desktopM`font-size: 48px;`};
		${media.phone`font-size: 38px;`};
`;

export const Div = styled.div`
	letter-spacing: 4px;
	font-family: Lily Script One, cursive;
	color: #fff;
	text-align: center;
	h1{
		${media.desktopL`font-size: 78px;`};
		${media.desktopM`font-size: 58px;`};
		${media.phone`font-size: 28px;`};
	}
	p {
		background-color: rgba(0, 0, 0, 0.8);
		width: 50%;
		margin: 0 auto;
		text-align: left;
		line-height: 1.8;
		padding: 20px;

		${media.desktopM`font-size: 42px !important;`};
		${media.phone`font-size: 18px !important; width:90%`};
	}
	button{
		margin-top: 1em;
        margin:.2em;
		padding:20px;
		background-color: #4fee76;
		color: #FFFFFF;
		outline: none;
		font-size: 18px;
	}
`;

export const CarrouselImg = styled.div`
	overflow:hidden;
`;
