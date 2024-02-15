import { Typography, Rating } from "@mui/material"
import React from "react"

export const   MyStarRating:React.FC<{}>=()=>{
    return <>
         <Typography component="legend">No rating given</Typography>
            <Rating name="no-value" value={null} />
    </>
}