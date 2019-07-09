import styled from 'styled-components/macro';
import { media } from '../../styles/responsive.styled'


export const Img = styled.img`
    width:200px;
    height:200px;
    border-radius:50%;
    ${media.phone`
      width:60px;
      height:60px;
    `}
    ${media.desktopL`
        width:170px;
        height:150px;
    `}
    border:${props => !props.is_visible ? 'none' : 'solid 2px green'};
`
export const List = styled.div`
  width:80%;
  margin:0 auto;
  padding: .5em;
  display:flex !important;
  flex-wrap:wrap;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(0,0,0,.8);
    div{
        text-align:center;
        padding-top:.5em;
        cursor: pointer;
        margin:20px;
    }
${media.desktopL`
    height:600px;
    p{font-size:26px;}
`}

${media.phone`
    width:90%;
    div{ margin:0 .5em 0 .5em;}
    p{font-size:14px;} 
`}
`;

export const NavIngredients = styled.nav`
margin:0 auto;

ul{
    display: flex;
    justify-content: space-around;
    li{
        list-style: none;
        width:100%;
        :first-child{
            background-color:#FFA500;
        }
        :nth-child(2){
            background-color: #007D00;
        }
        :nth-child(3){
            background-color:#C4293A;
        }
        :nth-child(4){
            background-color:#4fee76 ;
        }
        :nth-child(5){
            background-color:#FBE898;
        }
        border-radius:10px 35px 0px 0px;
        color:#FFFFFF;
        width:100%;
        text-align: center;
        cursor:pointer;
        :active{
         transform:translateY(2px);
        }
    }
}
${media.desktopM`
    width:80%;
    font-size:38px;
`}
${media.desktopL`
    width:80%;
    font-size:30px;
`}
${media.phone`
    font-size:22px;
    width:90%;
`}
`;

export const Cart = styled.div`
min-height:250px;
margin-top:1em;
img{
    margin:.2em;
    width:150px;
    height:150px;
    border-radius:50%;
}
${media.phone`
    img{
    margin:.2em;
    width:60px;
    height:60px;
    border-radius:50%;      
    }
`}
`
