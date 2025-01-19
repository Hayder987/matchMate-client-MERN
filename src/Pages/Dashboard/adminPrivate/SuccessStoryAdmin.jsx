import { FaEye } from "react-icons/fa6";
import useReviewData from "../../../hooks/data/useReviewData";
import { MdDeleteForever } from "react-icons/md";


const SuccessStoryAdmin = () => {
    const {reviewData, reviewLoading} = useReviewData()

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
                 <button className="text-xl"><FaEye /></button>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                  <button className="flex duration-300 hover:bg-red-400 hover:text-gray-950 bg-red-600 py-2 px-4 rounded-md text-gray-100 font-semibold items-center gap-2">
                    <span className="text-xl"><MdDeleteForever /></span>
                    Delete
                  </button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuccessStoryAdmin;
