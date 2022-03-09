import {combineReducers} from "redux";
import {CALCULATOR_KEY, reducerCalculator} from "./reducer";

let rootReducer=combineReducers({
    [CALCULATOR_KEY]:reducerCalculator
})

export {rootReducer}