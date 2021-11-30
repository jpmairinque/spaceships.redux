import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'


const ShipCard = ({ name, home_port, image, id }) => {
    
    
    return (
        <Link to={{pathname:`/ship/${id}`, state: 1 }} >
        <S.CardWrapper>
            
                <img src={image} alt="" />
                <S.CardDetail>
                    <h4>{name}</h4>
                    <p>{home_port}</p>
                </S.CardDetail>
           

        </S.CardWrapper>
        </Link>
    )
}

export default ShipCard
