import axios from "axios";

const axiosPubInstance = axios.create({
    baseURL: `${import.meta.env.VITE_Server_URL}`,
  });

const useAxiosPublic = () => {
    return axiosPubInstance
};

export default useAxiosPublic;