import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import LoginLayouts from "../layouts/LoginLayouts";
import Register from "../pages/Login/Register";
import ViewLayOuts from "../layouts/ViewLayOuts";
import ViewDetails from "../pages/Shared/ViewDetails";
import AllCards from "../pages/Shared/AllCards/AllCards";

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
        path: '/register',
        element: <Register></Register>
    },
    {
        path: "services",
        element: <ViewLayOuts></ViewLayOuts>,
        children: [
            {
                path:"/services",
                element:<AllCards></AllCards>,
            },
            {
        path: ':id',
        element: <ViewDetails></ViewDetails>
    },
        ]
    }
    
])

export default router;