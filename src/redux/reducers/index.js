import { combineReducers } from "redux";
import { shipsReducer } from "./ShipsReducer";
import { shipDetailReducer } from "./ShipDetailReducer";

const reducers = combineReducers({
    allShips: shipsReducer,
    shipDetail: shipDetailReducer
})

export default reducers