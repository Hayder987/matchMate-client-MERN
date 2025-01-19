import { FaEdit } from "react-icons/fa";
import PageMargin from "../../Components/commonComponents/PageMargin";
import useAuth from "../../Context/useAuth";
import logo from "../../assets/logo/logo.jpg";
import { FaStreetView } from "react-icons/fa6";
import { RiContactsBook3Fill } from "react-icons/ri";
import { MdDashboardCustomize, MdManageAccounts, MdOutlineFavorite, MdWorkspacePremium } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import Swal from "sweetalert2";
import { NavLink, Outlet, useNavigate } from "react-router";
import useUserData from "../../hooks/data/useUserData";
import { GiLovers } from "react-icons/gi";

const Dashboard = () => {
  const { logOutUser } = useAuth();
  const navigate = useNavigate();
  const [userData, refetch] = useUserData();
  console.log(userData)

  const logOutHandler = async () => {
    try {
      await logOutUser();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Logout Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: err.message || "An error occurred",
      });
    }
  };

  return (
    <PageMargin>
      <div className="flex container mx-auto min-h-[calc(100vh-145px)] ">
        {/* sidebar desktop */}
        <div className="lg:w-2/12 bg-blue-800 py-6 px-3">
          {/* logo */}
          <div className="flex items-center gap-3 mb-10">
            <img src={logo} alt="" className="w-8 h-8 rounded-full" />
            <h1 className="text-xl md:text-xl font-bold text-pink-500">
              <span className="text-white">Match</span>Mate
            </h1>
          </div>
          {/* dashmenu user */}
          <div className="flex flex-col justify-between min-h-[60vh] py-10">
            <div className="">
              {userData?.role === "admin" ? (
                // admin route------------------------->
                <div className="mb-20">
                   <ul className="text-gray-100 flex flex-col gap-6 cursor-pointer font-semibold">
                    <NavLink to="adminDashBoard">
                      <li className="flex items-center gap-2">
                      <MdDashboardCustomize /> Admin Dashboard
                      </li>
                    </NavLink>
                    <NavLink to="manageUser">
                      <li className="flex items-center gap-2">
                      <MdManageAccounts /> Manage Users
                      </li>
                    </NavLink>
                    <NavLink to="approvedPrimeum">
                      {" "}
                      <li className="flex items-center gap-2">
                      <MdWorkspacePremium /> Approved Premium
                      </li>
                    </NavLink>
                    <NavLink to="approvedContact">
                      <li className="flex items-center gap-2">
                      <RiContactsBook3Fill /> Approved Contact Request
                      </li>
                    </NavLink>
                  </ul>
                </div>
              ) : (
                <div className="mb-20">
                  {/* user Route */}
                  <ul className="text-gray-100 flex flex-col gap-6 cursor-pointer font-semibold">
                    <NavLink to="editBio">
                      <li className="flex items-center gap-2">
                        <FaEdit /> Edit Biodata
                      </li>
                    </NavLink>
                    <NavLink to="viewBio">
                      <li className="flex items-center gap-2">
                        <FaStreetView /> View Biodata
                      </li>
                    </NavLink>
                    <NavLink to="contactreq">
                      {" "}
                      <li className="flex items-center gap-2">
                        <RiContactsBook3Fill /> My Contact Request
                      </li>
                    </NavLink>
                    <NavLink to="favorite">
                      <li className="flex items-center gap-2">
                        <MdOutlineFavorite /> Favorites Biodata
                      </li>
                    </NavLink>
                    <NavLink to="gotMarried">
                      <li className="flex items-center gap-2">
                      <GiLovers /> Got Married
                      </li>
                    </NavLink>
                  </ul>
                </div>
              )}
            </div>
            <div className="">
              <button
                onClick={logOutHandler}
                className="flex items-center px-2 hover:text-[#ec4899] text-xl uppercase gap-3 font-semibold text-white"
              >
                Logout
                <span className="text-2xl">
                  <LuLogOut />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="lg:w-10/12 bg-white p-6">
          <Outlet></Outlet>
        </div>
      </div>
    </PageMargin>
  );
};

export default Dashboard;
