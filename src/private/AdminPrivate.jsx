import { Navigate} from "react-router";
import LoaderSpinner from "../Components/commonComponents/LoaderSpinner";
import useAuth from "../Context/useAuth";
import useUserData from "../hooks/data/useUserData";

const AdminPrivate = ({children}) => {
    const {user, loading} = useAuth()
    const [userData, isLoading] = useUserData()

    if(loading || isLoading){
        return <LoaderSpinner></LoaderSpinner>
    }

    if(user && userData.role === "admin"){
       return children
    }

    return <Navigate  to={'/login'}></Navigate>
};

export default AdminPrivate;