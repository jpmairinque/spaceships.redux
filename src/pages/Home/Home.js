import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShips } from '../../redux/actions/ShipsActions'
import { ShipsList } from '../../components/ShipsList/ShipsList'
import Loader from '../../components/Loader/Loader'
import { QUERY_LIST_OF_SHIPS, client } from '../../graphql/queries'

const Home = () => {    

    const [loading, setLoading] = useState(true)   
    const dispatch = useDispatch()
    const { ship } = useSelector((state) => state.shipDetail).ship

    const fetchShips = async (query) => {
        setLoading(true)
        const data = await client.request(query)
        dispatch(setShips(data))
        setLoading(false)
    }

    useEffect(() => {       
        if(!ship){
        fetchShips(QUERY_LIST_OF_SHIPS)   
        } else {
            setLoading(false)
        }
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
