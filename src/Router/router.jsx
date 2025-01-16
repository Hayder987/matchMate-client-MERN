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
import AdminDashBoard from "../Pages/Dashboard/adminPrivate/AdminDashBoard";
import ManageUser from "../Pages/Dashboard/adminPrivate/ManageUser";
import ApprovedPrimum from "../Pages/Dashboard/adminPrivate/ApprovedPrimum";
import ApprovedConatct from "../Pages/Dashboard/adminPrivate/ApprovedConatct";
import BioDatas from "../Pages/biodatas/BioDatas";
import AboutPage from "../Pages/About/AboutPage";
import ContactPage from "../Pages/contactPage/ContactPage";
 


export const router = createBrowserRouter([
    
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {path:"/", element:<Home></Home>},
            {path:"/login", element:<Login></Login>},
            {path:"/register", element:<Register></Register>},
            {path:"/bioData", element:<BioDatas></BioDatas>},
            {path:"/about", element:<AboutPage></AboutPage>},
            {path:"/contact", element:<ContactPage></ContactPage>},
            {path:"dashboard", 
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children:[
                //    { index: true, element: <PrivateRoute><ViewBioData /></PrivateRoute> },
                   {path:'editBio', element:<PrivateRoute><EditBioData></EditBioData></PrivateRoute>},
                   {path:'viewBio', element:<PrivateRoute><ViewBioData></ViewBioData></PrivateRoute>},
                   {path:"contactreq", element:<PrivateRoute><ContactRequest></ContactRequest></PrivateRoute>},
                   {path:'favorite', element:<PrivateRoute><FavoriteBio></FavoriteBio></PrivateRoute>}, 
                   //    admin Route
                   {index: true, element:<AdminDashBoard></AdminDashBoard>},
                   {path:'adminDashBoard', element:<AdminDashBoard></AdminDashBoard>},
                   {path:'manageUser', element:<ManageUser></ManageUser>},
                   {path:'approvedPrimeum', element:<ApprovedPrimum></ApprovedPrimum>},
                   {path:'approvedContact', element:<ApprovedConatct></ApprovedConatct>},
                   
                ]
            },
        ]
    }
])