import axios from "axios";
import useAuth from "../../Context/useAuth";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_Server_URL}`,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOutUser } = useAuth();
  const navigate = useNavigate();
  axiosInstance.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (error) => {
      if (error.status === 401 || error.status === 403) {
        await navigate("/");
        Swal.fire({
          title: "UnAuthorized Access",
          text: "You Need to sign in ",
          icon: "error",
        });
        await logOutUser();
      }

      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default useAxiosSecure;
