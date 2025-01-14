import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const useAuth = () => {
    const contextAuth = useContext(AuthContext)
    return contextAuth
};

export default useAuth;