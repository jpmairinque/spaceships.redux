import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { useParams } from 'react-router'
import { useQuery, gql } from '@apollo/client'
import { setShipDetail } from '../../redux/actions/ShipDetailActions'



const QUERY_SHIP_DETAIL = gql`
query Ship($id: ID!) {
    ship(id: $id) {
        name
        active
        image
        type
        attempted_landings
        successful_landings
        year_built
        model
    }
  }
`;

const ShipDetail = () => {

    const {shipID} = useParams()
    const { data, loading, error} = useQuery(QUERY_SHIP_DETAIL, {variables: {id: shipID}} )

    const { ship } = useSelector((state) => state.shipDetail)
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(setShipDetail(data, error))
    }, [data])

    return (
        <>
        {loading ? <h1>CARREGANDO</h1> : 
         <S.DetailWraper>
         
          {ship && ship.ship.name}
         </S.DetailWraper>
     } 
       
        </>
    )
}

export default ShipDetail
