
const initialState = {
    ships: [],
    error: ""
}

export const shipsReducer = (state = initialState, { type, payload})=>{

    switch (type) {
        case 'SET_SHIPS':
            return {...state, ships: payload.ships, error: payload.error}
    
        default:
            return state;
    }
}