import React from 'react'
import * as S from './styles'

const ShipCard = ({ name, home_port, image }) => {
    return (
        <S.CardWrapper>
            <img src={image} alt="" />
            <S.CardDetail>
                <h4>{name}</h4>
                <p>{home_port}</p>
            </S.CardDetail>

        </S.CardWrapper>
    )
}

export default ShipCard
