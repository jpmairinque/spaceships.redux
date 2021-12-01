import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setShips } from '../../redux/actions/ShipsActions'
import { ShipsList } from '../../components/ShipsList/ShipsList'
import {gql, GraphQLClient } from 'graphql-request'
import Loader from '../../components/Loader/Loader'


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
                <Loader/>
                : <ShipsList/>}

        </>
    )
}

export default Home
