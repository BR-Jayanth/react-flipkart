import React from "react";
import { something } from "./external";
import './external.css'

export const ExternalCss:React.FC<{}>=()=>{
     
    return <>
        <h1 style={something}>im inline css</h1>   
        <h2 className="abcd">hghghgh</h2>
    </>
}