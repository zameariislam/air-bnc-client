import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from '../Pages/shared/ErrorPage'
import Home from '../Pages/Home'
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,


            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }



        ]



    }

])
export default router