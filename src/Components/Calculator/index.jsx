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

    const [states, setStates] = useState(initialStates)

    function AddNum(n){

        if(n != '.'){
            setStates(prev => {
                return{...prev, displayValue: prev.displayValue === '0' ? n : prev.displayValue + n}
            })

            return;
        }


        if(!states.displayValue.includes('.')){
            setStates(prev => {
                return{...prev, displayValue: prev.displayValue + n}
            })
        }
    }

    function SetOperation(op){

        const values = [states.values];
        values[states.current] = parseFloat(states.displayValue)

        setStates(prev => {
            return{...prev, displayValue: '0', operation: op, values, current: prev.current === 0 ? prev.current + 1 : prev.current - 1}
        })

        

    }

    function GetResult(){
        if(states.operation!=null){
            const values = [...states.values];

            try{
                values[0] = eval(`${parseFloat(values[0])} ${states.operation} ${parseFloat(states.displayValue)}`)
            }catch(error){
                values[0] = states.values[0];
            }

            setStates(prev => {
                return{...prev, displayValue: values[0], operation: null, values: [0, 0], current: 0}
            })
        }
    }

    function ClearMemory(){

        setStates(initialStates)

    }

    return(
        <div className="container">
            <div className="TopBox">
                    <div className="PreviewDiv">
                        {
                            states.operation != null &&

                            <p className="NumberPreview">{states.values[0]} {states.operation} {states.displayValue}</p>
                        }
                    </div>

                <div className="DisplayDiv">
                    <p className="NumberDisplay">{states.displayValue}</p>
                </div>
            </div>

            <div className="BottomBox">
                <div className="ButtonsGroup">
                    <Buttons symbol="AC" action={() => ClearMemory('0')} width="74%" color="#A7A7A7"/>
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
                    <Buttons symbol="0" action={() => AddNum('0')} width="47%" color="#333333"/>
                    <Buttons symbol="." action={() => AddNum('.')} width="20%" color="#333333"/>
                    <Buttons symbol="=" action={() => GetResult()} width="20%" color="#FD9427"/>
                </div>
            </div>

        </div>
    )
}