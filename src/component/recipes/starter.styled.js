import styled from 'styled-components';

export const Vegetables = styled.div`
    
        display:flex !important;
        flex-wrap:wrap;
        align-items: center;
        justify-content: space-around;
        background-color: rgba(0,0,0,0.4);
        div{
            text-align:center;
            padding-top:1em;
            cursor: pointer;
            img{
                width:150px;
                height:150px;
                border-radius:50%;
            }
        }
`;