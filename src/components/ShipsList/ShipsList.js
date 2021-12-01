import React from 'react'
import { useSelector } from 'react-redux'
import ShipCard from '../ShipCard/ShipCard'
import * as S from './styles'



export const ShipsList = () => {


    const { ships } = useSelector((state) => state.allShips)   

    return (
        <S.ListWrapper >
            {(ships.ships.map((ship, key) => {
                    return (

                       ship.image && <ShipCard {...ship} key={ship.id}/>
                    )
                }))}
        </S.ListWrapper>
    )
}
