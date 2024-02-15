import React from "react";


export const MyProps: React.FC<{}> = () => {


    return <>
    <center>
        <h1>Props Concept</h1>
        <h2>jyothi:{Parlour({ type:"black current"})}</h2>
        <h2>Poojitha:{Parlour({type:"chocolate"})}</h2>
        <h2>Jayanth:<Parlour type={'pista'}/></h2>
        {/* <Parlour/> */}
    </center>
    </>
}

interface IParlour{
    type:any
}

function Parlour<IParlour>(props:any ){
    return <span> ice cream {props.type} </span>
}

// using fate arrow function

// let Parlur:React.FC<{type:any}>=(props)=>{
//     return<>
//         {props.type}
//     </>
// }