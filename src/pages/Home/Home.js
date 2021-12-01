import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setShips } from '../../redux/actions/ShipsActions'
import { ShipsList } from '../../components/ShipsList/ShipsList'
import Loader from '../../components/Loader/Loader'
import { QUERY_LIST_OF_SHIPS, client } from '../../graphql/queries'

const Home = () => {    

    const [loading, setLoading] = useState(true)   
    const dispatch = useDispatch()

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
