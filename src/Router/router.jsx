import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "../private/PrivateRoute";
import EditBioData from "../Pages/Dashboard/userPrivate/EditBioData";
import ViewBioData from "../Pages/Dashboard/userPrivate/ViewBioData";
import ContactRequest from "../Pages/Dashboard/userPrivate/ContactRequest";
import FavoriteBio from "../Pages/Dashboard/userPrivate/FavoriteBio";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {path:"/", element:<Home></Home>},
            {path:"/login", element:<Login></Login>},
            {path:"/register", element:<Register></Register>},
            {path:"dashboard", 
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children:[
                   {path:'editBio', element:<PrivateRoute><EditBioData></EditBioData></PrivateRoute>},
                   {path:'viewBio', element:<PrivateRoute><ViewBioData></ViewBioData></PrivateRoute>},
                   {path:"contactreq", element:<PrivateRoute><ContactRequest></ContactRequest></PrivateRoute>},
                   {path:'favorite', element:<PrivateRoute><FavoriteBio></FavoriteBio></PrivateRoute>}, 
                ]
            },
        ]
    }
])