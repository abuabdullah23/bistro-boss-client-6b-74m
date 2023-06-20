import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import OrderFood from "../pages/OrderFood/OrderFood/OrderFood";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import MyCart from "../pages/Dashboard/UserPanel/MyCart/MyCart";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/Dashboard/Admin/AddItems/AddItems";
import ManageItems from "../pages/Dashboard/Admin/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/Admin/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/UserPanel/Payment/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <OrderFood></OrderFood>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'sign-up',
                element: <SignUp></SignUp>
            },
            

        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // Admin Routes
            {
                path: 'admin-home',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'add-items',
                element: <AdminRoute><AddItems/></AdminRoute>
            },
            {
                path: 'manage-items',
                element: <AdminRoute><ManageItems/></AdminRoute>
            },
            {
                path: 'update-menu/:id',
                element: <AdminRoute><UpdateItem/></AdminRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/dashboard/update-menu/${params.id}`)
            },
            {
                path: 'all-users',
                element: <AdminRoute><AllUsers/></AdminRoute>
            },


            // Users Routes
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            }
            
        ]
    },
]);