import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { QUERY_SHIP_DETAIL, client } from '../../graphql/queries'

import { useDispatch, useSelector } from 'react-redux'
import { setShipDetail } from '../../redux/actions/ShipDetailActions'

import * as S from './styles'
import Loader from '../../components/Loader/Loader'


const ShipDetail = () => {

    const { shipID } = useParams()
    const { ship } = useSelector((state) => state.shipDetail).ship
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)

    const fetchShip = async (query) => {
        const data = await client.request(query, { id: shipID })
        dispatch(setShipDetail(data))
        setLoading(false)
    }

    useEffect(() => {

        fetchShip(QUERY_SHIP_DETAIL)
    }, [])

    return (
        <>
            {loading ? <Loader /> : (
                <S.DetailWraper>
                    <img src={ship.image} alt="" />
                    <S.InfoWrapper>
                        <h1> {ship.name}</h1>
                        {ship.active ? <h2 style={{ color: 'green' }}>Active</h2> : <h2 style={{ color: 'red' }}>Inactive</h2>}
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
