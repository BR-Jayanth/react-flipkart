import { Box, Grid } from "@mui/material";
import React from "react";
import { MyNavbar } from "../../components/navbar/MyNavbar";
import { MySlider } from "../../components/MySlider/MySlider";
import { ApiCaller } from "../../components/apiCaller/ApiCaller";

export const Home: React.FC<{}> = () => {
    return <>
        <Box>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
            >
                <>
                <MyNavbar/>
                </>
                <>
                <MySlider/>
                </>
                <>
                <ApiCaller/>
                </>
            </Grid>
        </Box>
    </>
}