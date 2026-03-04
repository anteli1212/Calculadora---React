import React, { useState } from "react"

import Buttons from "../Buttons"

import "./calculator.css"

export default function Calculator(){

    const initialStates = {
        displayValue: '0',
        operation: null,
        values: [0, 0],
        current: 0
    }

    const [states, setStates] = useState(...initialStates)

    function AddNum(n){
        setStates(prev => {
            return{...prev, displayValue: prev.displayValue === '0' ? n : prev.displayValue + n}
        })
    }

    function SetOperation(op){

        setStates(prev => {
            return{...prev, displayValue: '0', operation: op, current: prev.current === 0 ? prev.current + 1 : prev.current - 1}
        })
    }

    function GetResult(){

    }

    function ClearDisplay(){
    }

    return(
        <div className="container">
            <div className="TopBox">
                <p className="NumberDisplay">{states.displayValue}</p>
            </div>

            <div className="BottomBox">
                <div className="ButtonsGroup">
                    <Buttons symbol="AC" action={() => ClearDisplay('0')} width="74%" color="#A7A7A7"/>
                    <Buttons symbol="/" action={() => SetOperation('/')} width="20%" color="#FD9427"/>
                </div>

                <br/>

                <div className="ButtonsGroup">
                    <Buttons symbol="7" action={() => AddNum('7')} width="20%" color="#333333"/>
                    <Buttons symbol="8" action={() => AddNum('8')} width="20%" color="#333333"/>
                    <Buttons symbol="9" action={() => AddNum('9')} width="20%" color="#333333"/>
                    <Buttons symbol="*" action={() => SetOperation('*')} width="20%" color="#FD9427"/>
                </div>

                <br />

                <div className="ButtonsGroup">
                    <Buttons symbol="4" action={() => AddNum('4')} width="20%" color="#333333"/>
                    <Buttons symbol="5" action={() => AddNum('5')} width="20%" color="#333333"/>
                    <Buttons symbol="6" action={() => AddNum('6')} width="20%" color="#333333"/>
                    <Buttons symbol="-" action={() => SetOperation('-')} width="20%" color="#FD9427"/>
                </div>

                <br />

                <div className="ButtonsGroup">
                    <Buttons symbol="1" action={() => AddNum('1')} width="20%" color="#333333"/>
                    <Buttons symbol="2" action={() => AddNum('2')} width="20%" color="#333333"/>
                    <Buttons symbol="3" action={() => AddNum('3')} width="20%" color="#333333"/>
                    <Buttons symbol="+" action={() => SetOperation('+')} width="20%" color="#FD9427"/>
                </div>

                <br />

                <div className="ButtonsGroup">
                    <Buttons symbol="0" action={() => GetFunction()} width="47%" color="#333333"/>
                    <Buttons symbol="." action={() => {setDisplayNum(displayNum + ".")}} width="20%" color="#333333"/>
                    <Buttons symbol="=" action={() => GetResult()} width="20%" color="#FD9427"/>
                </div>
            </div>

        </div>
    )
}