const FavoriteBio = () => {
  return (
    <div>
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
          {/* {myReqData.map((item, idx) => (
            <tr key={idx}>
              <td className="whitespace-nowrap px-4 py-3 text-gray-700">
                {idx + 1}
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
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default FavoriteBio;
