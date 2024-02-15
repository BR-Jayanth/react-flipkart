import React from "react";

export const MyFragment:React.FC<{}>=()=>{
    let data=["apple","mango"]
    let data1={a:"apple",b:"mango"}
    return <div>
        {data}
        {/* {data1} */}
         im extra memory
    </div>
}