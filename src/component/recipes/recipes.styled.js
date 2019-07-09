import styled from 'styled-components/macro';
import { media } from '../../styles/responsive.styled';

export const RecipeBox = styled.section`
    display:flex;
    flex-wrap: wrap;
`;
export const Recipe = styled.div`
    background-color: #50EE75;
    border: solid 1px #50EE75;
    border-radius: 8px;
    >div{overflow: hidden;}
    img{
        width:100%;
        :hover{
            transition: all 800ms ease-in;
            transform: scale(1.2); 
            
        }
    }
    ${media.desktopL`
        width:18%;
        margin:1%;
        h2{font-size:28px;}
    `}
    ${media.phone`
        width:90%;
        margin:0;
        margin-bottom:1%;
        h2{font-size:16px;}
    `}
`;