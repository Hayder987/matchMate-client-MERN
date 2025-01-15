import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Context/useAuth";
import useAxiosPublic from "../axios/useAxiosPublic";


const useUserData = () => {
    const {user} = useAuth()
    const serverUrl = useAxiosPublic()

    const {data:userData=[]} = useQuery({
        queryKey: ['userData', user?.email],
        queryFn: async()=>{
         const {data} = serverUrl.get(`/userData/${user?.email}`)
         return data
        }
    })
    return [userData]
};

export default useUserData;
