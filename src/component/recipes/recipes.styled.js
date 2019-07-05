import styled from 'styled-components/macro';
import { media } from '../../styles/responsive.styled';

export const RecipeBox = styled.section`
    display:flex;
    flex-wrap: wrap;
`;
export const Recipe = styled.div`
    border: solid 2px #50EE75;
    background-color: #50EE75;
    border-radius: 8px;
    img{
        border-radius:50%;
        margin-top:1%;
    }
    ${media.desktopL`
        width:18%;
        margin:1%;
        h2{font-size:20px;}
    `}
    ${media.phone`
        width:90%;
        margin:0;
        margin-bottom:1%;
        h2{font-size:16px;}
    `}
`;