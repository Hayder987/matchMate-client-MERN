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
import AdminPrivate from "../private/AdminPrivate";
import DetailsPage from "../Pages/Details/DetailsPage";
import CheackOutPage from "../Pages/cheackoutPage/CheackOutPage";
import Welcome from "../Components/commonComponents/Welcome";
import GotMarried from "../Pages/Dashboard/userPrivate/GotMarried";
import SuccessStoryAdmin from "../Pages/Dashboard/adminPrivate/SuccessStoryAdmin";
import UserProfile from "../Pages/Dashboard/UserProfile";
 


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
            {path:"/details/:id", element:<DetailsPage></DetailsPage>},
            {path:"/checkout/:biodataId", element:<PrivateRoute><CheackOutPage></CheackOutPage></PrivateRoute>},
            {path:"dashboard", 
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children:[
                   { index: true, element: <PrivateRoute><Welcome></Welcome></PrivateRoute> },
                   //user Route
                   {path:'editBio', element:<PrivateRoute><EditBioData></EditBioData></PrivateRoute>},
                   {path:'viewBio', element:<PrivateRoute><ViewBioData></ViewBioData></PrivateRoute>},
                   {path:"contactreq", element:<PrivateRoute><ContactRequest></ContactRequest></PrivateRoute>},
                   {path:'favorite', element:<PrivateRoute><FavoriteBio></FavoriteBio></PrivateRoute>},
                   {path:'gotMarried', element:<PrivateRoute><GotMarried></GotMarried></PrivateRoute>},
                   {path:'userProfile', element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>} ,
                   //admin Route
                   {path:'adminDashBoard', element:<AdminPrivate><AdminDashBoard></AdminDashBoard></AdminPrivate>},
                   {path:'manageUser', element:<AdminPrivate><ManageUser></ManageUser></AdminPrivate>},
                   {path:'approvedPrimeum', element:<AdminPrivate><ApprovedPrimum></ApprovedPrimum></AdminPrivate>},
                   {path:'approvedContact', element:<AdminPrivate><ApprovedConatct></ApprovedConatct></AdminPrivate>},
                   {path:'successStory', element:<AdminPrivate><SuccessStoryAdmin></SuccessStoryAdmin></AdminPrivate>},
                   
                ]
            },
        ]
    }
])