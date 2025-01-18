import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Context/useAuth";
import useAxiosSecure from "../../../hooks/axios/useAxiosSecure";
import LoaderSpinner from "../../../Components/commonComponents/LoaderSpinner";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import NoData from "../../../Components/commonComponents/NoData";

const ContactRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: myReqData = [],
    isLoading: reqDataLoading,
    refetch: myReqFetch,
  } = useQuery({
    queryKey: ["myReqData", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/contactReq/${user?.email}`);
      return data;
    },
  });

  if (reqDataLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  //   delete my req data
  const reqDeleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axiosSecure.delete(`/deleteMyReq/${id}`);
          if (data.deletedCount > 0) {
            myReqFetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        } catch (err) {
          Swal.fire({
            title: err.code,
            text: err.message,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div>
      {myReqData.length === 0 ? (
        <div className="">
          <NoData></NoData>
        </div>
      ) : (
        <div className="max-w-full overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr className="bg-blue-100 text-left">
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  #
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Bio ID
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Status
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Email
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Phone
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {myReqData.map((item, idx) => (
                <tr key={idx}>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                    {idx + 1}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                    {item?.userName}
                  </td>
                  <th className="whitespace-nowrap text-left px-4 py-3 text-gray-700">
                    {item?.bioId}
                  </th>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                    <button
                      className={`py-1 px-3 rounded-full  font-semibold ${
                        item?.status === "pending"
                          ? "bg-yellow-300"
                          : "bg-green-500 text-gray-100"
                      }`}
                    >
                      {item?.status}
                    </button>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                    {item?.status === "pending" ? (
                      <p>Waiting For Approved!</p>
                    ) : (
                      <p>{item?.userEmail}</p>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                    {item?.status === "pending" ? (
                      <p>Waiting For Approved!</p>
                    ) : (
                      <p>{item?.userPhone}</p>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                    <button
                      onClick={() => reqDeleteHandler(item?._id)}
                      className="text-3xl text-red-600"
                    >
                      <RiDeleteBin6Fill />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactRequest;
