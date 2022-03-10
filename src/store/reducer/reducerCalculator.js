import {BUTTON_NUMBER, BUTTON_TOTAL, CLEAR_NUMBER} from "../actions";

export const CALCULATOR_KEY=""
let initialState={
    calculator:'',
    total:'',
}

export const reducerCalculator=(state=initialState, action)=>{


    switch (action.type){
        case BUTTON_NUMBER:

         return{...state, calculator: state.calculator.concat(action.payload)}

        case BUTTON_TOTAL:
            try {
                return {...state, total: eval(state.calculator).toString()}
            }
            catch{
                return {...state, total:"Error"}

            }
        case CLEAR_NUMBER:

            return{...state, calculator: '', total: ''}

        default:
            return state
    }
}