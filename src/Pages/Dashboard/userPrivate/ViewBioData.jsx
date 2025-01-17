import { MdWorkspacePremium } from "react-icons/md";
import LoaderSpinner from "../../../Components/commonComponents/LoaderSpinner";
import useUserBio from "../../../hooks/data/useUserBio";
import { TbBadge } from "react-icons/tb";
import { format } from "date-fns";
import useAuth from "../../../Context/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/axios/useAxiosSecure";
import useUserData from "../../../hooks/data/useUserData";

const ViewBioData = () => {
  const [userBio, bioLoading] = useUserBio();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [userData,_, userRefetch] = useUserData()

  if (bioLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  const premiumBtnHandler = () => {
    Swal.fire({
      title: "Are you sure to make you premium?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sure!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.patch(`/userPending/${user?.email}`, {bioId:userBio?.bioId, reqName:userBio?.info?.name});
          userRefetch()
          Swal.fire({
            title: "Send!",
            text: "Your Request Send Successfully.",
            icon: "success",
          });
        } catch (err) {
          console.log(err)
          Swal.fire({
            icon: "error",
            title: err.message || "An error occurred",
          });
        }
      }
    });
  };

  return (
    <div className="px-4 md:px-6 lg:px-8 py-6 lg:py-16 bg-blue-50">
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
          <div className="">
            {userData?.type==="normal" && <button onClick={premiumBtnHandler} className="btn py-3 px-6">
              Make Biodata Premium
            </button>}
            {userData?.type==="pending" && <button className="py-3 px-6 bg-gray-200 hover:cursor-not-allowed">Waiting For Admin Approval!</button>}
            {userData?.type==="premium" && <button className="py-3 px-6 bg-gray-200 hover:cursor-not-allowed">You are Premium User!</button>}
          </div>
        </div>
        {/* badge */}
        <div className="lg:w-1/12">
          <div className="flex justify-center items-center">
           {
            userData?.type==="admin"?<button className="bg-white p-2 text-5xl text-pink-600 rounded-full"><MdWorkspacePremium /></button>:
            <button className="bg-white p-2 text-5xl text-pink-600 rounded-full">
              <TbBadge />
            </button>
           }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBioData;
