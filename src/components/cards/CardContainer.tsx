import React from "react";
import { MyCards } from "../myImage/MyCards";
import { Grid } from "@mui/material";
import img1 from '../../static/images/pexels-pixabay-60597.jpg'
import img2 from '../../static/images/2.jpg'
import img3 from '../../static/images/3.jpg'
import img4 from '../../static/images/pexels-pixabay-60597.jpg'

export const CardContainer: React.FC<{}> = () => {
    let card = <MyCards img={img1}/>
    let arry = [<MyCards img={img1}/>, <MyCards img={img2}/>, <MyCards img={img3}/>]

    return <>
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            {arry}
        </Grid>
        
    </>
}