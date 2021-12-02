import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 280px;
  height: 100px;
  display: flex;
  padding: 1rem;
  margin: 15px;
  border-radius: 10px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.04);
  }

  img {
    margin-right: 15px;
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
`;

export const CardDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
