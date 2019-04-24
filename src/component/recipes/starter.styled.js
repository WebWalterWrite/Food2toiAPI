import styled from 'styled-components';

export const Vegetables = styled.div`
    
        display:flex !important;
        flex-wrap:wrap;
        align-items: center;
        justify-content: space-around;
        background-color: rgba(0,0,0,0.6);
        div{
            text-align:center;
            padding-top:1em;
            img{
                width:150px;
                height:150px;
                border-radius:50%;
            }
        }
`;