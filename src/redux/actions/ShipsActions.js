export const setShips = (ships, error) => {

    return{
        type: 'SET_SHIPS',
        payload: {ships: ships, error: error}
    }


}

