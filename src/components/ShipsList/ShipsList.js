import React from 'react'
import ShipCard from '../ShipCard/ShipCard'
import * as S from './styles'

export const ShipsList = ({ships}) => {
    return (
        <S.ListWrapper>
            {(ships && ships.ships.map((ship, key) => {
                    return (
                       ship.image && <ShipCard {...ship} key={ship.id}/>
                    )
                }))}
        </S.ListWrapper>
    )
}
