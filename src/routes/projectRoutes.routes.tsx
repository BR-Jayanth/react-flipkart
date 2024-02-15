import { Outlet } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Login } from "@mui/icons-material";
import { Register } from "../pages/Register/Register";
import { Loginpage } from "../pages/Login/Loginpage";

 export const AllProjectRoute={
    path:'/pro',
    element:<>
               <Outlet/>
            </>,
    children:[
        {
            path:'home',
            element:<Home/>
        },
        {
            path:'login',
            element:<Loginpage/>
        },
        {
            path:'register',
            element:<Register/>
        }
    ]
 }