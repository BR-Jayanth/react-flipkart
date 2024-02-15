import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const entrypoint = {
    path: '/',
    element: <>
        <h1>Where do u want to go?</h1>
        <Link to={"/all-lessons"}>
            <Button variant="contained" color="info">
                lessons
            </Button>
        </Link>
        <Link to={'/pro/login'}>
            <Button variant="contained" color="secondary">
                Project
            </Button>
        </Link>

    </>
}