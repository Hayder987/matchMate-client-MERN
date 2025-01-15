import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Context/useAuth";
import useAxiosPublic from "../axios/useAxiosPublic";


const useUserData = () => {
    const {user} = useAuth()
    const serverUrl = useAxiosPublic()

    const {data:userData=[], isLoading} = useQuery({
        queryKey: ['userData', user?.email],
        queryFn: async()=>{
         const {data} = await serverUrl.get(`/userData/${user?.email}`)
         return data
        }
    })
    return [userData, isLoading]
};

export default useUserData;
