
import { Navigate, useLocation } from "react-router";
import LoaderSpinner from "../Components/commonComponents/LoaderSpinner";
import useAuth from "../Context/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const {pathname} = useLocation()

    if(loading){
        return <LoaderSpinner></LoaderSpinner>
    }

    if(user){
        return children
    }
    return <Navigate state={pathname} to='/login'></Navigate>
};

export default PrivateRoute;