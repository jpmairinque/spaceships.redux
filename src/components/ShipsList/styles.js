import styled from "styled-components";
import { keyframes } from "styled-components";

const FadeAnimation = keyframes`

    0%{
        opacity: 0
    }

    100%{
        opacity: 1;
    }


`;

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  animation: ${FadeAnimation} 0.5s;
`;
