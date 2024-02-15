import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register: React.FC<{}> = () => {

    let [Email, setEmail] = useState<any>()
    let [Password, setPassword] = useState<any>()
    let [name, setName] = useState<any>()
    const onregisterclick =()=>{
        alert(Email+name+Password)
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

                            <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e)=>{setName(e.target.value)}} />

                            <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>{setEmail(e.target.value)}} />

                            <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e)=>{setPassword(e.target.value)}}/>
                            <>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="space-around"
                                    alignItems="center"
                                >
                                    
                                    <Link to={"/pro/login"}>
                                        <Button variant="contained" color="success">Login</Button>
                                    </Link>
                                    <Link to={"/pro/login"}>
                                        <Button variant="text" onClick={onregisterclick}>Register</Button>
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