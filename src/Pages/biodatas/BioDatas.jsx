import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import LoaderSpinner from "../../Components/commonComponents/LoaderSpinner";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import AllBioCard from "../../Components/commonComponents/AllBioCard";
import SectionDivider from "../../Components/commonComponents/SectionDivider";
import { IoFilterSharp } from "react-icons/io5";
import NoData from "../../Components/commonComponents/NoData";
import { TfiLayoutSidebarRight } from "react-icons/tfi";

const divisions = [
  "Dhaka",
  "Chattagram",
  "Rajshahi",
  "Rangpur",
  "Barisal",
  "Khulna",
  "Mymensingh",
  "Sylhet",
];

const BioDatas = () => {
  const [page, setPage] = useState(1);
  const limit = 12;
  const serverUrl = useAxiosPublic();
  const [ageValue, setAgeValue] = useState(0);
  const [biodataType, setBiodataType] = useState("");
  const [division, setDivision] = useState("");
  const [sideMenu, setSideMenu] = useState(false)

  console.log(ageValue, biodataType, division);

  const { data: allBioData = [], isLoading: allBioLoading, refetch:AllBioDataFetch } = useQuery({
    queryKey: ["allBioData", page, ageValue, biodataType, division],
    queryFn: async () => {
      const { data } = await serverUrl(
        `/allBioData?page=${page}&limit=${limit}&age=${ageValue}&type=${biodataType}&division=${division}`
      );
      return data;
    },
    keepPreviousData: true,
  });

const resetHandler = async()=>{
  setAgeValue(0)
  setBiodataType('')
  setDivision('')

  AllBioDataFetch()
}

  return (
    <div>
      <div className="container relative flex py-6 mx-auto">
        {/* aside desktop*/}
        <div className="lg:w-2/12 hidden lg:flex lg:flex-col  py-6 px-4 min-h-[90vh] bg-slate-100">
          <h1 className="flex mb-20  font-bold text-blue-800 text-2xl items-center gap-2">
            <IoFilterSharp />
            Filter Bio
          </h1>
          <div className="border-y border-gray-300 px-2 py-12">
            {/* age */}
            <div className="">
              <p className="text-xl flex justify-between mb-6 font-semibold">
              Find Ages Above
                <span className="">{ageValue}</span>
              </p>
              <input
                type="range"
                name=""
                value={ageValue}
                onChange={(e) => setAgeValue(e.target.value)}
                min="10"
                max="90"
                className="w-full"
              />
            </div>
            <div className="border-gray-300 border-b-2 my-10"></div>
            {/* bioDataType */}
            <div className="w-full">
              <label className="block font-medium mb-2">Biodata Type</label>
              <select
                onChange={(e) => setBiodataType(e.target.value)}
                className="border-none w-full px-3 py-2 bg-white"
              >
                <option disabled value="">
                  Biodata Type
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="border-gray-300 border-b-2 my-10"></div>
            {/* Divison */}
            <div className="w-full">
              <label className="block font-medium mb-2">Division</label>
              <select
                onChange={(e) => setDivision(e.target.value)}
                className="border-none w-full px-3 py-2 bg-white"
              >
                <option disabled value="">
                  {" "}
                  Division
                </option>
                {divisions.map((division, index) => (
                  <option key={index} value={division}>
                    {division}
                  </option>
                ))}
              </select>
            </div>
            {/* reset  */}
            <div className="mt-12">
                <button 
                onClick={resetHandler}
                className="bg-blue-800 hover:bg-blue-400 hover:text-black font-semibold w-full py-2 text-white px-6">Reset</button>
            </div>
          </div>
        </div>

        <div className={`flex duration-500 fixed z-20 ${!sideMenu?'left-2':"left-[250px]"} lg:hidden`}>
            <button 
            onClick={()=>setSideMenu(!sideMenu)}
            className="text-4xl bg-blue-200  "><TfiLayoutSidebarRight /></button>
        </div>
      
        {/* aside mobile*/}
        <div 
        onBlur={()=>setSideMenu(false)}
        className={`w-8/12 duration-500 absolute ${!sideMenu?'-left-[1400px]':"left-2"} z-10 flex flex-col lg:hidden  py-6 px-4 h-full min-h-[90vh] bg-slate-100`}>
          <h1 className="flex mb-20  font-bold text-blue-800 text-2xl items-center gap-2">
            <IoFilterSharp />
            Filter Bio
          </h1>
          <div className="border-y border-gray-300 px-2 py-12">
            {/* age */}
            <div className="">
              <p className="text-xl flex justify-between mb-6 font-semibold">
              Find Ages Above
                <span className="">{ageValue}</span>
              </p>
              <input
                type="range"
                name=""
                value={ageValue}
                onChange={(e) => setAgeValue(e.target.value)}
                min="10"
                max="90"
                className="w-full"
              />
            </div>
            <div className="border-gray-300 border-b-2 my-10"></div>
            {/* bioDataType */}
            <div className="w-full">
              <label className="block font-medium mb-2">Biodata Type</label>
              <select
                onChange={(e) => setBiodataType(e.target.value)}
                className="border-none w-full px-3 py-2 bg-white"
              >
                <option disabled value="">
                  Biodata Type
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="border-gray-300 border-b-2 my-10"></div>
            {/* Divison */}
            <div className="w-full">
              <label className="block font-medium mb-2">Division</label>
              <select
                onChange={(e) => setDivision(e.target.value)}
                className="border-none w-full px-3 py-2 bg-white"
              >
                <option disabled value="">
                  {" "}
                  Division
                </option>
                {divisions.map((division, index) => (
                  <option key={index} value={division}>
                    {division}
                  </option>
                ))}
              </select>
            </div>
            {/* reset  */}
            <div className="mt-12">
                <button 
                onClick={resetHandler}
                className="bg-blue-800 hover:bg-blue-400 hover:text-black font-semibold w-full py-2 text-white px-6">Reset</button>
            </div>
          </div>
        </div>


        {/* card */}
        <div className="lg:w-10/12  p-6  bg-white">
          {allBioLoading ? (
            <LoaderSpinner></LoaderSpinner>
          ) : (
            <div className="">
              {allBioData.items?.length === 0 ? (
                <NoData></NoData>
              ) : (
                <div className="min-h-[90vh] flex flex-col justify-between p-4">
                  <div className="grid gap-8 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {allBioData.items.map((item) => (
                      <AllBioCard item={item} key={item?._id}></AllBioCard>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                      disabled={page === 1}
                      className="px-4 py-2 bg-blue-800 text-white rounded disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <span className="px-4 py-2">
                      Page {page} of {allBioData.totalPages}
                    </span>
                    <button
                      onClick={() =>
                        setPage((prev) =>
                          prev < allBioData.totalPages ? prev + 1 : prev
                        )
                      }
                      disabled={page === allBioData.totalPages}
                      className="px-8 py-2 bg-blue-800 text-white rounded disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <SectionDivider></SectionDivider>
    </div>
  );
};

export default BioDatas;
