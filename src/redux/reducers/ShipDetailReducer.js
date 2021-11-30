
const initialState = {
    ship: {},
    error: ""
}

export const shipDetailReducer = (state = initialState, { type, payload})=>{

    switch (type) {
        case 'SET_SHIP':
            return {...state, ship: payload.ship, error: payload.error}
    
        default:
            return state;
    }
}