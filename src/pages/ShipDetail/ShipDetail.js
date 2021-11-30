import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { useParams } from 'react-router'
import { gql } from '@apollo/client'
import { setShipDetail } from '../../redux/actions/ShipDetailActions'
import { GraphQLClient } from 'graphql-request'
import Loader from '../../components/Loader/Loader'



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

    const { shipID } = useParams()
    const { ship } = useSelector((state) => state.shipDetail).ship
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)    
   
    const client = new GraphQLClient('https://api.spacex.land/graphql/')

    const fetchShip = async (query) => {
        const data = await client.request(query, {id: shipID})
        dispatch(setShipDetail(data))
        setLoading(false)
    }

    useEffect(() => {       
       fetchShip(QUERY_SHIP_DETAIL)    
    }, [])

    return (
        <>
            {loading ? <Loader/> : (
                <S.DetailWraper>                   
                    <img src={ship.image} alt="" />
                    <S.InfoWrapper>
                        <h1> {ship.name}</h1>
                        {ship.active ? <h2 style={{color: 'green'}}>Active</h2> : <h2 style={{color: 'red'}}>Inactive</h2>}
                        <h3>{ship.type}</h3>
                      {ship.attempted_landings && <p><span>Attempted Landings:</span> {ship.attempted_landings}</p>}  
                      {ship.succesful_landings && <p><span>Succesful Landings:</span> {ship.succesful_landings}</p>}                       
                        <p>{ship.sucessful_landings}</p>
                        <p>Year: {ship.year_built}</p>
                        <p>{ship.model}</p>
                    </S.InfoWrapper>



                </S.DetailWraper>
            )
            }

        </>
    )
}

export default ShipDetail
