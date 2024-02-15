import React, { useEffect, useState } from "react";
import { flipkartApi } from "../../api/flipkartApi.service";
import { MyCards } from "../myImage/MyCards";
import { Grid } from "@mui/material";

export const ApiCaller: React.FC<{}> = () => {
    let [data, setData] = useState([]);
    useEffect(() => {
        flipkartApi().then((a: any) => { setData(a) });
    }, [])

    console.log(data)
    return <>
        <h1>this is an example of api ApiCaller</h1>7
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >

            {
                data.map((item: any) => {
                    return <MyCards img={item.image} />
                })
            }
        </Grid>
    </>
}