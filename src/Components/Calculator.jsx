import React from 'react';
import {Styled} from "./Calculator.styled";
import {useDispatch, useSelector} from "react-redux";
import {buttonNumber,buttonTotal, clearNumber, buttonSign} from "../store/actions";
import {reducerCalculator} from "../store/reducer";


const Calculator = () => {

const dispatch=useDispatch()
const state=useSelector((state)=> state)
const {lineOne, lineTwo}=state.reducerCalculator



// const arr=[]

const funcButton=(payload)=>{
    if(payload==='='){
        dispatch(buttonTotal(payload))
    }else {
        dispatch(buttonNumber(payload))
    }

}

    return (
        <div>
            <Styled.Total>
            <p>{lineTwo}</p>
                <p>{lineOne}</p>
            </Styled.Total>
            <Styled.Root>

    <button value={0} onClick={(e)=>funcButton(e.target.value)}>0</button>
    <button value={1} onClick={(e)=>funcButton(e.target.value)}>1</button>
    <button value={2} onClick={(e)=>funcButton(e.target.value)}>2</button>
    <button value={3} onClick={(e)=>funcButton(e.target.value)}>3</button>
    <button value={4} onClick={(e)=>funcButton(e.target.value)}>4</button>
    <button value={5} onClick={(e)=>funcButton(e.target.value)}>5</button>
    <button value={6} onClick={(e)=>funcButton(e.target.value)}>6</button>
    <button value={7} onClick={(e)=>funcButton(e.target.value)}>7</button>            <button onClick={()=>funcButton(4)}>4</button>
    <button value={8} onClick={(e)=>funcButton(e.target.value)}>8</button>
    <button value={9} onClick={(e)=>funcButton(e.target.value)}>9</button>
    <button value={'+'} onClick={(e)=>funcButton(e.target.value)}>+</button>
    <button value={'-'} onClick={(e)=>funcButton(e.target.value)}>-</button>
    <button value={'/'} onClick={(e)=>funcButton(e.target.value)}>/</button>
    <button value={'*'} onClick={(e)=>funcButton(e.target.value)}>*</button>
    <button value={'='} onClick={(e)=>funcButton(e.target.value)}>=</button>
    <button value={'.'} onClick={(e)=>funcButton(e.target.value)}>.</button>


            </Styled.Root>
        </div>
    );
};

export default Calculator;