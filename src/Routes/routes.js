import { createBrowserRouter } from "react-router-dom";
import BookingPage from "../components/BookingPage/BookingPage";
import Home from "../components/Home/home";
import Login from "../components/Login/Login";
import Main from "../components/Main/Main";
import Register from "../components/Register/Register";
import SinglePlace from "../components/SinglePlace/SinglePlace";
import PrivateRoute from "./PrivateRoute";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <h1>404 not Found</h1>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://hotel-management-server.vercel.app/places'),
                element:<Home></Home>
            },
            {
                path: '/place/:id',
                loader: ({params}) => {
                    return fetch(`https://hotel-management-server.vercel.app/places/${params.id}`)
                },
                element:<SinglePlace></SinglePlace>
            }, {
                path: '/hotels/:id',
                loader: ({ params }) => {
                    return fetch(`https://hotel-management-server.vercel.app/hotels/${params.id}`)
                },
                element: <PrivateRoute><BookingPage></BookingPage></PrivateRoute>
            }, {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }

])