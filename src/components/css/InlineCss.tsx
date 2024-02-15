import React from "react";

export const Inlinecss:React.FC<{}>=()=>{

    let mystyle={backgroundColor:'red'}
    
    return <>
        {/* <h1 style={{backgroundColor:'red'}}>im inline css</h1>    */}
        <h1 style={mystyle}>im inline css</h1>   
        <h2 className="abcd">hghghgh2</h2>
    </>
}