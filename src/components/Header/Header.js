import React from 'react'
import * as S from './styles'
import Ship from '../../assets/ship.svg'

const Header = () => {
    return (
        <S.HeaderWrapper>
            <img src={Ship} alt="" />
            <h1>Space Ships</h1>
        </S.HeaderWrapper>
    )
}

export default Header
