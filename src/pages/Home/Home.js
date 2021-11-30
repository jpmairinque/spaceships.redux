import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setShips } from '../../redux/actions/ShipsActions'
import { ShipsList } from '../../components/ShipsList/ShipsList'
import { request, gql, GraphQLClient } from 'graphql-request'


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

    const [loading, setLoading] = useState(true)    
    const dispatch = useDispatch()
    const client = new GraphQLClient('https://api.spacex.land/graphql/') 

    const fetchShips = async (query) => {
        const data = await client.request(query)
        dispatch(setShips(data))
        setLoading(false)
    }

    useEffect(() => {       
       fetchShips(QUERY_LIST_OF_SHIPS)    
    }, [])
    
    return (
        <>
            {loading ?
                <h1>CARREGANDO</h1>
                : <ShipsList/>}

        </>
    )
}

export default Home
