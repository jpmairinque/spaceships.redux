import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShips } from '../../redux/actions/ShipsActions'
import { ShipsList } from '../../components/ShipsList/ShipsList'
import Loader from '../../components/Loader/Loader'
import { QUERY_LIST_OF_SHIPS, client } from '../../graphql/queries'

const Home = () => {    

    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.allShips)

    const fetchShips = async (query) => {
        const data = await client.request(query)
        dispatch(setShips(data))
    }

    useEffect(() => {  
        if (loading) fetchShips(QUERY_LIST_OF_SHIPS)      
         
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
