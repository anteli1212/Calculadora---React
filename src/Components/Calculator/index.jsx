import React, { useState } from "react"

import Buttons from "../Buttons"

import "./calculator.css"

export default function Calculator(){

    const [displayNum, setDisplayNum] = useState('0')
    const [nums, setNums] = useState([])
    const [operation, setOperation] = useState('')
    const [result, setResult] = useState(0);

    function AddNum(n){
        if(displayNum == '0'){
            setDisplayNum(n)

            return;
        }

        setDisplayNum(displayNum + n)
    }

    function UpdateOperation(op){
        setOperation(op)

        if(nums.length < 2){
            setNums([...nums, parseFloat(displayNum)])
            return;
        }
    }

    function GetResult(){
        
        switch(operation){
            case '+':
                setResult(nums[0] + nums[1]);
                break;

            case '-':
                setResult(nums[0] - nums[1])
                break;

            case '/':
                setResult(nums[0] / nums[1])
                break;

            case '*':
                setResult(nums[0] * nums[1])
                break;
        }

        setDisplayNum(result);

    }

    function ClearDisplay(){
        setDisplayNum('0')
        setNums([]);
    }

    return(
        <div className="container">
            <div className="TopBox">
                <p className="NumberDisplay">{displayNum}</p>
            </div>

            <div className="BottomBox">
                <div className="ButtonsGroup">
                    <Buttons symbol="AC" action={() => ClearDisplay('0')} width="74%" color="#A7A7A7"/>
                    <Buttons symbol="/" action={() => UpdateOperation('/')} width="20%" color="#FD9427"/>
                </div>

                <br/>

                <div className="ButtonsGroup">
                    <Buttons symbol="7" action={() => AddNum('7')} width="20%" color="#333333"/>
                    <Buttons symbol="8" action={() => AddNum('8')} width="20%" color="#333333"/>
                    <Buttons symbol="9" action={() => AddNum('9')} width="20%" color="#333333"/>
                    <Buttons symbol="*" action={() => UpdateOperation('*')} width="20%" color="#FD9427"/>
                </div>

                <br />

                <div className="ButtonsGroup">
                    <Buttons symbol="4" action={() => AddNum('4')} width="20%" color="#333333"/>
                    <Buttons symbol="5" action={() => AddNum('5')} width="20%" color="#333333"/>
                    <Buttons symbol="6" action={() => AddNum('6')} width="20%" color="#333333"/>
                    <Buttons symbol="-" action={() => UpdateOperation('-')} width="20%" color="#FD9427"/>
                </div>

                <br />

                <div className="ButtonsGroup">
                    <Buttons symbol="1" action={() => AddNum('1')} width="20%" color="#333333"/>
                    <Buttons symbol="2" action={() => AddNum('2')} width="20%" color="#333333"/>
                    <Buttons symbol="3" action={() => AddNum('3')} width="20%" color="#333333"/>
                    <Buttons symbol="+" action={() => UpdateOperation('+')} width="20%" color="#FD9427"/>
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