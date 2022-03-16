import {BUTTON_NUMBER, BUTTON_SIGN, BUTTON_TOTAL, CLEAR_NUMBER} from "../actions";
import calculator from "../../Components/Calculator";


const initialState={
    lineOne:'0',
    lineTwo:'..'
}

export const reducerCalculator=(state=initialState, action)=>{
const {lineOne, lineTwo}=state

    switch (action.type){
        case BUTTON_NUMBER:
            const inf=action.payload
            if(inf!=='='&& inf!=='.' && inf!=='+' && inf!=='*' && inf!=='/') {
                return {...state, lineOne: action.payload}
            }if(inf==='+'|| inf==='/'|| inf==='*'|| inf==='-'){
            return {...state, lineOne: lineOne, lineTwo: lineOne+inf}
            }
            if(lineTwo===lineOne+inf){
                return {...state, lineOne: inf}
            }

        case BUTTON_TOTAL:
            const arr=lineTwo.split('', 2)
            const a=arr[0]
            const b=arr[1]
            const c=lineOne
            if(b==='+'){
                const res= +a+(+c)
               return{...state, lineOne: res,lineTwo: lineTwo+(+c)+action.payload }
            }
            if(b==='-'){
                const res= +a-(+c)
                return{...state, lineOne: res,lineTwo: lineTwo+(+c)+action.payload }
            }
            if(b==='*'){
                const res= +a*(+c)
                return{...state, lineOne: res,lineTwo: lineTwo+(+c)+action.payload }
            }
            if(b==='/'){
                const res= +a/(+c)
                return{...state, lineOne: res,lineTwo: lineTwo+(+c)+action.payload }
            }
            // if(action.payload)





        case CLEAR_NUMBER:

            return{...state, calculator: '', total: ''}

        default:
            return state
    }
}