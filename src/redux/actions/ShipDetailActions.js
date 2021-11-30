export const setShipDetail = (ship, error) => {

    return{
        type: 'SET_SHIP',
        payload: {ship: ship, error: error}
    }


}

