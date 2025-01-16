import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../axios/useAxiosSecure";
import useAuth from "../../Context/useAuth";

const useUserBio = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()

    const { data: userBio = {}, isLoading:bioLoading } = useQuery({
        queryKey: ["userBio", user?.email],
        queryFn: async () => {
          const { data } = await axiosSecure.get(`/userBio/${user?.email}`);
          return data;
        },
      });
    return [userBio, bioLoading]
};

export default useUserBio;