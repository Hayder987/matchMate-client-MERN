import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/axios/useAxiosSecure";
import LoaderSpinner from "../../../Components/commonComponents/LoaderSpinner";
import { RiAdminFill, RiAdminLine } from "react-icons/ri";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { TbBadge } from "react-icons/tb";
import { MdWorkspacePremium } from "react-icons/md";
import Swal from "sweetalert2";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: allUserData = [],
    isLoading: allUserLoading,
    refetch: allUserFetch,
  } = useQuery({
    queryKey: ["allUserData"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/allUserData`);
      return data;
    },
  });

  if (allUserLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  const makeAdminHandler = async(id)=>{
    try {
        Swal.fire({
          title: "Are you sure?",
          text: "Do You Want To Make This user Admin!",
          icon: "info",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Make it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await axiosSecure.patch(`/makeAdmin/${id}`);
            allUserFetch();
          }
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: err.message || "An error occurred",
        });
      }

  }

  const premuimHandler = async (id)=>{
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
             allUserFetch();
           }
         });
       } catch (err) {
         Swal.fire({
           icon: "error",
           title: err.message || "An error occurred",
         });
       }
  }

  return (
    <div>
      <div className="bg-blue-100 flex justify-between items-center flex-col md:flex-row text-xl p-3 mb-6">
        <p className="">All User: {allUserData.length}</p>
        <p className=""></p>
      </div>
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
              Make Admin
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Make Premium
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {allUserData.map((item, idx) => (
            <tr key={idx}>
              <th className="whitespace-nowrap text-left px-4 py-3 text-gray-700">
                {idx + 1}
              </th>
              <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                {item?.name}
              </td>
              <th className="whitespace-nowrap text-left px-4 py-3 text-gray-700">
                {item?.email}
              </th>
              <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                {item?.role === "admin" ? (
                  <p className="flex gap-2 items-center text-3xl ">
                    <span className="">
                      <RiAdminLine />
                    </span>
                    <span className="text-blue-500">
                      <IoCheckmarkDoneSharp />
                    </span>
                  </p>
                ) : (
                  <button 
                  onClick={()=>makeAdminHandler(item?._id)}
                  className="btn py-2 px-4 flex gap-2 items-center">
                    <span className="text-xl">
                      <RiAdminFill />
                    </span>
                    Make Admin
                  </button>
                )}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                {item?.type === "normal" && (
                  <p className="text-4xl text-pink-600 ">
                    <TbBadge />
                  </p>
                )}
                {item?.type === "pending" && (
                  <button
                  onClick={()=>premuimHandler(item?._id)}
                   className="bg-[#b79501] duration-300 hover:bg-blue-800 hover:text-white rounded-md font-semibold  py-2 px-4 flex gap-2 items-center">
                  <span className="text-xl">
                    <MdWorkspacePremium />
                  </span>
                  Make Premium
                </button>
                )}
                {item?.type === "premium" && (
                  <p className="text-4xl text-[#b79501] ">
                    <MdWorkspacePremium />
                  </p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
