import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_Server_URL}`,
  });

const useAxiosSecure = () => {
    return axiosInstance
};

export default useAxiosSecure;