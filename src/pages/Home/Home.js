import React, { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import { setShips } from '../../redux/actions/ShipsActions'
import ShipCard from '../../components/ShipCard/ShipCard'

const QUERY_LIST_OF_SHIPS = gql`

{
   ships {
       name
       id
       home_port  
       image    
    }
  }

`

const Home = () => {

    
    const { ships } = useSelector((state) => state.allShips)
    const dispatch = useDispatch()

    const { data, loading, error } = useQuery(QUERY_LIST_OF_SHIPS)

    console.log("xablau")

    useEffect(() => {
        dispatch(setShips(data, error))
    }, [data])

    
    return (
        <div>
            {loading ?
                <h1>CARREGANDO</h1>
                : (ships && ships.ships.map((ship, key) => {
                    return (
                        <ShipCard {...ship} key={ship.id}/>
                    )
                }))}

        </div>
    )
}

export default Home
