import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/axios/useAxiosSecure";
import NoData from "../../../Components/commonComponents/NoData";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import LoaderSpinner from "../../../Components/commonComponents/LoaderSpinner";
import Swal from "sweetalert2";
import { GiCheckMark } from "react-icons/gi";
import { Helmet } from "react-helmet-async";

const ApprovedConatct = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: allContactReq = [],
    isLoading: allContactReqLoading,
    refetch: allContactReqFetch,
  } = useQuery({
    queryKey: ["allContactReq"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/allContactReq`);
      return data;
    },
  });

  const {data:reqDocCount, refetch:CountFetch } = useQuery({
    queryKey: ['reqDocCount'],
    queryFn : async ()=>{
        const {data} = await axiosSecure(`/allReqPending`)
        return data.count
    }
  })

  

  if (allContactReqLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  const approvedContactHandler = async (id) => {
    try {
      await axiosSecure.patch(`/approvedContactReq/${id}`);
      allContactReqFetch()
      CountFetch()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Approved Success!",
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (err) {
      Swal.fire({
        title: err.code,
        text: err.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="">
      <Helmet>
        <title>Approved Contact || MatchMate</title>
      </Helmet>
        <div className="bg-blue-100 flex justify-between items-center flex-col md:flex-row text-xl p-3 mb-6">
          <p className="">All Request: {allContactReq.length}</p>
          <p className="">Pending Request: {reqDocCount}</p>
        </div>
      <div>
        {allContactReq === 0 ? (
          <div className="">
            <NoData></NoData>
          </div>
        ) : (
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr className="bg-blue-100 text-left">
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  #
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Profile Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Bio ID
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Email
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Applicant Email
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {allContactReq.map((item, idx) => (
                <tr key={idx}>
                  <th className="whitespace-nowrap text-left px-4 py-3 text-gray-700">
                    {idx + 1}
                  </th>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                    {item?.userName}
                  </td>
                  <th className="whitespace-nowrap text-left px-4 py-3 text-gray-700">
                    {item?.bioId}
                  </th>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                    {item?.userEmail}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                    {item?.ApplicantEmail}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                    {item?.status === "approved" ? (
                      <p className="text-center w-full text-green-600 text-2xl">
                        <GiCheckMark />
                      </p>
                    ) : (
                      <button
                        onClick={() => approvedContactHandler(item?._id)}
                        className="btn flex items-center gap-2  py-2 px-4"
                      >
                        <span className="text-xl">
                          <IoCheckmarkDoneOutline />
                        </span>
                        Approved
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ApprovedConatct;
