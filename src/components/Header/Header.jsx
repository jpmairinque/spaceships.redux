import React from "react";
import * as S from "./styles";
import Ship from "../../assets/ship.svg";
import Arrow from "../../assets/arrow.svg";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <S.HeaderWrapper>
      {pathname !== "/" && (
        <Link to="/">
          <img src={Arrow} alt="" />
        </Link>
      )}
      <S.FlexWrapper>
        <img src={Ship} alt="" />
        <h1>Space Ships</h1>
      </S.FlexWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
