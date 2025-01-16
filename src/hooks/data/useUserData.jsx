import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Context/useAuth";
import useAxiosSecure from "../axios/useAxiosSecure";


const useUserData = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const {data:userData=[], isLoading, refetch} = useQuery({
        queryKey: ['userData', user?.email],
        queryFn: async()=>{
         const {data} = await axiosSecure.get(`/userData/${user?.email}`)
         return data
        }
    })
    return [userData, isLoading, refetch]
};

export default useUserData;
