import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Context/useAuth";
import useAxiosSecure from "../../../hooks/axios/useAxiosSecure";
import LoaderSpinner from "../../../Components/commonComponents/LoaderSpinner";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import NoData from "../../../Components/commonComponents/NoData";

const FavoriteBio = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: favoriteData,
    isLoading: favoriteLoading,
    refetch: favoriteFatch,
  } = useQuery({
    queryKey: ["favoriteData", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/myFavorite/${user?.email}`);
      return data;
    },
  });

  if (favoriteLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  const favDeleteHandler = (id) => {
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
          const { data } = await axiosSecure.delete(`/myFavoriteItem/${id}`);
          if (data.deletedCount > 0) {
            favoriteFatch();
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
      {favoriteData.length === 0 ? (
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
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Bio ID
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Permanent Address
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Occupation
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {favoriteData.map((item, idx) => (
              <tr key={idx}>
                <th className="whitespace-nowrap text-left px-4 py-3 text-gray-700">
                  {idx + 1}
                </th>
                <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                  {item?.name}
                </td>
                <th className="whitespace-nowrap text-left px-4 py-3 text-gray-700">
                  {item?.bioDataId}
                </th>
                <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                  {item?.permanentAddress}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                  {item?.occupation}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                  <button
                    onClick={() => favDeleteHandler(item?._id)}
                    className="text-3xl text-red-600"
                  >
                    <RiDeleteBin6Fill />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FavoriteBio;
