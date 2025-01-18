
import { Navigate } from "react-router";
import LoaderSpinner from "../Components/commonComponents/LoaderSpinner";
import useAuth from "../Context/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    

    if(loading){
        return <LoaderSpinner></LoaderSpinner>
    }

    if(user){
        return children
    }
    return <Navigate  to='/login'></Navigate>
};

export default PrivateRoute;