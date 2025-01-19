import { FaEye } from "react-icons/fa6";
import useReviewData from "../../../hooks/data/useReviewData";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import LoaderSpinner from "../../../Components/commonComponents/LoaderSpinner";
import useAxiosSecure from "../../../hooks/axios/useAxiosSecure";
import Swal from "sweetalert2";

const SuccessStoryAdmin = () => {
  const { reviewData, reviewLoading, reviewFetch } = useReviewData();
  const [isOpen, setIsOpen] = useState(false);
  const [singleData, setSingleData] = useState({})
  const axiosSecure = useAxiosSecure();
  
  if(reviewLoading){
    return <LoaderSpinner></LoaderSpinner>
  }

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  const handleSingleStory = async(id) =>{
    const eachData = await reviewData.find(item=> item?._id === id)
    setSingleData(eachData) 
    handleToggle()
  }

const deleteHandler = (id)=>{
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
              const { data } = await axiosSecure.delete(`/deleteReviewData/${id}`);
              console.log(data)
              if (data.deletedCount > 0) {
                reviewFetch();
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
}


  return (
    <div>
      <div className="px-6 py-10">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr className="bg-blue-100 text-left">
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                #
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Male Biodata Id
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Female Biodata Id
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                View
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {reviewData.map((item, idx) => (
              <tr key={idx}>
                <th className="whitespace-nowrap text-left px-4 py-3 text-gray-700">
                  {idx + 1}
                </th>
                <th className="whitespace-nowrap text-left px-4 py-3 text-blue-800">
                  {item?.userbio}
                </th>
                <th className="whitespace-nowrap text-left px-4 py-3 text-pink-700">
                  {item?.partnerbio}
                </th>
                <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                  <button
                  onClick={()=>handleSingleStory(item?._id)}
                    
                   className="text-xl">
                    <FaEye />
                  </button>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                  <button
                  onClick={()=> deleteHandler(item?._id)}
                   className="flex duration-300 hover:bg-red-400 hover:text-gray-950 bg-red-600 py-2 px-4 rounded-md text-gray-100 font-semibold items-center gap-2">
                    <span className="text-xl">
                      <MdDeleteForever />
                    </span>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* modal */}
      <div className="">
        <div>
          {/* Modal */}
          {isOpen && (
            <div
              id="default-modal"
              className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50"
            >
              <div className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow dark:bg-gray-700">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* Modal header */}
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Success Story Cupule {singleData?.userbio} & {singleData?.partnerbio}
                    </h3>
                    <button
                      onClick={handleClose}
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* Modal body */}
                  <div className="p-4 md:p-5 space-y-4">
                    <div className="">
                        <p className="">{singleData?.storyDesc}</p>
                    </div>
                  </div>
                  {/* Modal footer */}
                  <div className="flex items-center justify-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      onClick={handleClose}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      I Read This
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryAdmin;
