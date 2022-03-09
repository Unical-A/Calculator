import React from 'react';
import {Styled} from "./Calculator.styled";
import {useDispatch, useSelector} from "react-redux";
import {buttonNumber,buttonTotal} from "../store/actions";
import {CALCULATOR_KEY} from "../store/reducer";



const Calculator = () => {
const dispatch=useDispatch()

    // const handleTotal=(e)=>{
    //
    // e.preventDefault()
    //     dispatch(buttonTotal())
    // }
    const viewCalculator=useSelector((state)=> {
        return state[CALCULATOR_KEY]
    })





    return (
        <div>
        {/*    <div>*/}
        {/*    <input type="text"*/}
        {/*           placeholder='0'*/}
        {/*    defaultValue={(viewCalculator.total).length===0?*/}
        {/*        viewCalculator.calculator:viewCalculator.total}/>*/}
        {/*</div>*/}
            <h1>{(viewCalculator.total).length===0?
                viewCalculator.calculator:viewCalculator.total}</h1>
            <Styled.Root>

                <button onClick={()=>dispatch(buttonNumber(0))}>0</button>
                <button onClick={()=>dispatch(buttonNumber(1))}>1</button>
                <button onClick={()=>dispatch(buttonNumber(2))}>2</button>
                <button onClick={()=>dispatch(buttonNumber(3))}>3</button>
                <button onClick={()=>dispatch(buttonNumber(4))}>4</button>
                <button onClick={()=>dispatch(buttonNumber(5))}>5</button>
                <button onClick={()=>dispatch(buttonNumber(6))}>6</button>
                <button onClick={()=>dispatch(buttonNumber(7))}>7</button>
                <button onClick={()=>dispatch(buttonNumber(8))}>8</button>
                <button onClick={()=>dispatch(buttonNumber(9))}>9</button>
                <button onClick={()=>dispatch(buttonNumber("+"))}>+</button>
                <button onClick={()=>dispatch(buttonNumber("-"))}>-</button>
                <button onClick={()=>dispatch(buttonTotal("="))}>=</button>






            </Styled.Root>
        </div>
    );
};

export default Calculator;