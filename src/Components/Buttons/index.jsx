import React from "react";

export default function Buttons({symbol, action, width, color}){
    return(
        <div style={{width: width, height: width}}>
            <button style={{backgroundColor: color, borderRadius: 20, width: "100%", height:'100%', display:"flex", alignItems:'center', justifyContent:'center'}} onClick={action}>{symbol}</button>
        </div>
    )
}