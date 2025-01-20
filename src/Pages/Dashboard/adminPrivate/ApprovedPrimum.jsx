import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/axios/useAxiosSecure";
import LoaderSpinner from "../../../Components/commonComponents/LoaderSpinner";
import { MdWorkspacePremium } from "react-icons/md";
import Swal from "sweetalert2";
import NoData from "../../../Components/commonComponents/NoData";
import { Helmet } from "react-helmet-async";

const ApprovedPrimum = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: userData = [],
    isLoading,
    refetch: premiumRefetch,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/userPremiumReq`);
      return data;
    },
  });

  if (isLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  const premuimHandler = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "Do You Want To Make This user Premium!",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Make it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosSecure.patch(`/userReq/${id}`);
          premiumRefetch();
          //   Swal.fire({
          //     text: "User ",
          //     icon: "success",
          //   });
        }
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: err.message || "An error occurred",
      });
    }
  };

  return (
    <div className="">
      <Helmet>
        <title>Approved || MatchMate</title>
      </Helmet>
      {userData.length === 0 ? (
        <div className="py-6">
            <NoData></NoData>
        </div>
      ) : (
        <div className="py-6 px-2">
          {/* Add a container with max-width for proper layout */}
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
                    Email
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Bio ID
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {userData.map((item, idx) => (
                  <tr key={idx}>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
                      {idx + 1}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                      {item?.reqName}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                      {item?.email}
                    </td>
                    <th className="whitespace-nowrap text-left px-4 py-3 text-gray-700">
                      {item?.bioId}
                    </th>
                    <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                      {item?.type === "pending" ? (
                        <button
                          onClick={() => premuimHandler(item?._id)}
                          className="flex items-center space-x-2 btn py-2 px-4"
                        >
                          <span className="text-2xl text-orange-400">
                            <MdWorkspacePremium />
                          </span>
                          <span>Make Premium</span>
                        </button>
                      ) : (
                        <button className=""></button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApprovedPrimum;
