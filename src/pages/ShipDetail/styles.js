import styled from "styled-components";
import { keyframes } from "styled-components";

const FadeAnimation = keyframes`

    0%{
        opacity: 0
    }

    100%{
        opacity: 1;
    }


`

export const DetailWraper = styled.div`

   
    height: 100%;
    display: flex;
    align-items: center;
    
    animation: ${FadeAnimation} 0.5s ; 
   

    img{
        margin-top: 90px;
        margin-left: 50px;
        width: 30%;
        height: 70%;
        object-fit: cover;
        border-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

   

`

export const InfoWrapper = styled.div`

    margin-top: 70px;
    margin-left: 20px;
    height: 65%;
    display: flex;
    flex-direction: column;

    h1{
        margin-bottom: 1rem;
    }
    p{
        margin-bottom: 3px;
    }
`