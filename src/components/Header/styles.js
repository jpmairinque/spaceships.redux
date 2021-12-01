import styled from "styled-components";

export const HeaderWrapper = styled.header`
    
    width: 70%;
    height: 90px;
    background-color: #061345;
    z-index: 999;
    color: white;
    position: fixed;
    border-radius: 21px 21px 0 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    
    transform: translateY(-17px);
    

    >a img{
        position: absolute;
        width: 60px;
        margin-left: 2rem;
        margin-top: 2rem;
        transform: translateY(-16px);
       
      
    }

`

export const FlexWrapper = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 60px;
        margin-left: 2rem;
        margin-right: 0.8rem;
    }

`