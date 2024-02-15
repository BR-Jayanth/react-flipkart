import React, { useState } from "react";

export const MyUseStateHook:React.FC<{}>=()=>{
    let showdata;
    let [data,setdata]=useState("first time");
    return <>
    <input type="text" name="" id="" onChange={(e)=>{console.log(e.target.value) ;showdata=e.target.value ;setdata(e.target.value)}} />
    <>
    {data}
    {showdata}</>
    </>
}   