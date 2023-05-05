import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import LoginLayouts from "../layouts/LoginLayouts";
import Register from "../pages/Login/Register";
import ViewLayOuts from "../layouts/ViewLayOuts";
import ViewDetails from "../pages/Shared/ViewDetails";
import AllCards from "../pages/Shared/AllCards/AllCards";
import Blog from "../pages/Blog/Blog";
import BlogLayouts from "../layouts/BlogLayouts";
import FourOFour from "../FourOFour/FourOFour";
import PrivateRoute from "./PrevateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },


        ]

    },
    {
        path: '/login',
        element: <LoginLayouts></LoginLayouts>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },

        ]
    },
    {
        path: '/blog',
        element: <Blog></Blog>,



    },
    {
        path: '/register',
        element: <Register></Register>
    },



    {
        path: "services",
        element: <ViewLayOuts></ViewLayOuts>,
    },
    {
        path: "services/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader:({params}) => fetch(`https://chefs-hunter-server-jamiulislam10.vercel.app/categories/${params.id}`)

    },








    {
        path: '*',
        element: <FourOFour></FourOFour>
    }

])

export default router;