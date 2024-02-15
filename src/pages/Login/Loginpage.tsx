import { Box, Grid, Paper, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Loginpage: React.FC<{}> = () => {
    let [Email, setEmail] = useState<any>()
    let [Password, setPassword] = useState<any>()
    const onloginclick =()=>{
        alert(Email+Password)
    } 

    return <>

        <Box>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    marginTop: 8,
                    display: 'flex',
                }}
            >
                <></>
                <>
                    <Paper sx={{ width: '500px', }}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"

                        >
                            <h1>Register</h1>

                            {/* <TextField id="outlined-basic" label="Name" variant="outlined" /> */}

                            <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => { setEmail(e.target.value) }} />

                            <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e) => { setPassword(e.target.value) }} />
                            <>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="space-around"
                                    alignItems="center"
                                >   <Link to={"/pro/home"}>
                                        <Button variant="contained" color="success" onClick={onloginclick} >Login</Button>
                                    </Link>
                                    <Link to={"/pro/register"}>
                                        <Button variant="text">Register</Button>
                                    </Link>
                                </Grid>

                            </>

                        </Grid>

                    </Paper>
                </>
                <>

                </>
            </Grid >


        </Box>
    </>
}

