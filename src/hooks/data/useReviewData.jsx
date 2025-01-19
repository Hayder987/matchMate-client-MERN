import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../axios/useAxiosSecure";

const useReviewData = () => {
    const axiosSecure = useAxiosSecure()
    const {data:reviewData = [], isLoading:reviewLoading, refetch:reviewFetch} = useQuery({
        queryKey: ['reviewData'],
        queryFn: async ()=>{
            const {data} = await  axiosSecure.get(`/getAllReview`)
            return data
        }
    })
    return {reviewData, reviewLoading, reviewFetch}
};

export default useReviewData;