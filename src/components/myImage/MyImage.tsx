import React from 'react'
import img1 from '../../static/images/pexels-pixabay-60597.jpg'


export const MyImage: React.FC<{}> = () => {
    let data = <img width="200px" src={img1} alt="" />
    let arr=[]
    for(let i=0;i<10;i++){
        arr.push(data)
    }

    return <>
       
    {data}<br></br>
    {arr}
    
    </>
}