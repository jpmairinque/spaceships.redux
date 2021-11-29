import { combineReducers } from "redux";
import { shipsReducer } from "./ShipsReducer";

const reducers = combineReducers({
    allShips: shipsReducer
})

export default reducers