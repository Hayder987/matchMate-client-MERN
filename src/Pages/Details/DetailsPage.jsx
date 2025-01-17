import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";
import LoaderSpinner from "../../Components/commonComponents/LoaderSpinner";
import { format } from "date-fns";
import useUserData from "../../hooks/data/useUserData";
import { FaRegHeart } from "react-icons/fa";

const DetailsPage = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [userData] = useUserData();

  // if(isLoading ){
  //     return <LoaderSpinner></LoaderSpinner>
  // }

  const { data: userBio = [], isLoading: userBioLoading } = useQuery({
    queryKey: ["singleUserData", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/singleBio/${id}`);
      return data;
    },
  });

  return (
    <div className="py-10 md:py-16">
      <div className="container mx-auto bg-white p-4">
        {userBioLoading ? (
          <LoaderSpinner></LoaderSpinner>
        ) : (
          <div className="">
            <div className="flex flex-col-reverse lg:flex-row justify-center gap-10">
              {/* image */}
              <div className="lg:w-5/12 flex justify-center items-center">
                <img
                  src={userBio?.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* text */}
              <div className="lg:w-6/12  ">
                <p className="text-3xl font-bold mb-6">{userBio?.info?.name}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <button className="bg-blue-200 py-1 px-4 rounded-full">
                    {userBio?.info?.height} ft
                  </button>
                  <button className="bg-blue-200 py-1 px-4 rounded-full">
                    {userBio?.info?.weight} Kg
                  </button>
                  <button className="bg-blue-200 py-1 px-4 rounded-full">
                    {userBio?.info?.age} Years
                  </button>
                </div>
                {/* skin && Gender */}
                <div className="flex justify-between mb-3">
                  <p className="">
                    <span className="font-bold">Skin: </span>
                    <span className="">{userBio?.info?.race}</span>
                  </p>
                  <p className="">
                    <span className="font-bold">Gender: </span>
                    <span className="">{userBio?.biodataType}</span>
                  </p>
                </div>
                {/* father && mother */}
                <div className="flex justify-between mb-3">
                  <p className="">
                    <span className="font-bold">Father: </span>
                    <span className="">{userBio?.info?.fathername}</span>
                  </p>
                  <p className="">
                    <span className="font-bold">Mother: </span>
                    <span className="">{userBio?.info?.mothername}</span>
                  </p>
                </div>
                {/* birthDate && occupation */}
                <div className="flex justify-between mb-3 ">
                  <p className="">
                    <span className="font-bold">BirthDate: </span>
                    <span className="">
                      {format(new Date(userBio?.info?.birthDate), "PP")}
                    </span>
                  </p>
                  <p className="">
                    <span className="font-bold">Occupation: </span>
                    <span className="">{userBio?.info?.occupation}</span>
                  </p>
                </div>
                {/* divison */}
                <p className="mb-3">
                  <span className="font-bold ">Present Division: </span>
                  <span className="">{userBio?.info?.presentDivision}</span>
                </p>
                <p className="mb-4">
                  <span className="font-bold">Permanent Division: </span>
                  <span className="">{userBio?.info?.permanentDivision}</span>
                </p>
                {/* Contact Info */}
                {userData.type === "premium" && (
                  <div className="">
                    <div className="border-b-2 pb-2 mb-3">
                      <p className="text-sm text-center">Contact Information</p>
                    </div>
                    <div className="flex justify-between mb-5">
                      <p className="">
                        <span className="font-bold ">Email: </span>
                        <span className="">{userBio?.email}</span>
                      </p>
                      <p className="">
                        <span className="font-bold">Phone: </span>
                        <span className="">{userBio?.info?.mobileNumber}</span>
                      </p>
                    </div>
                  </div>
                )}

                {/* Expected Partner */}
                <div className="mb-8">
                  <div className="border-b-2 pb-2 mb-3">
                    <p className="text-sm text-center">Expected Partner Info</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <button className="bg-blue-200 py-1 px-4 rounded-full">
                      {userBio?.expectedHeight} ft
                    </button>
                    <button className="bg-blue-200 py-1 px-4 rounded-full">
                      {userBio?.expectedWeight} Kg
                    </button>
                    <button className="bg-blue-200 py-1 px-4 rounded-full">
                      {userBio?.partenerAge} Years
                    </button>
                  </div>
                </div>
                {/* send request */}
                <div className="">
                  <div className="flex items-center justify-between px-4">
                    {userData.type === "premium" ? (
                      <div className="">
                      </div>
                    ) : (
                      <button className="btn py-2 px-3">
                        Request Contact Information
                      </button>
                    )}
                    <button className="text-3xl bg-blue-100 p-3 rounded-full"><FaRegHeart /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
