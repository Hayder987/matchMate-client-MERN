import { LuLogOut } from "react-icons/lu";
import useUserData from "../../hooks/data/useUserData";
import useAuth from "../../Context/useAuth";

const UserProfile = () => {
  const [userData] = useUserData();
  const { logOutUser } = useAuth();

  return (
    <div className="min-h-[90vh] flex justify-center items-center">
      <div className="lg:min-w-[700px] border rounded-lg  mx-auto bg-white p-6 lg:p-16">
        <h1 className="text-2xl font-medium mb-6 text-center">
          Welcome! {userData?.name}
        </h1>
        {userData?.photo ? (
          <img src={userData?.photo} alt="" className="w-full h-[350px]" />
        ) : (
          <div className="border-2 p-8 rounded-full">
            <h1 className="text-6xl text-center font-bold">
              {userData?.name.slice(0, 2).toUpperCase()}
            </h1>
          </div>
        )}
        <h3 className="text-xl font-medium text-gray-600 text-center my-4">
          {userData?.email}
        </h3>
        <p className="uppercase text-center font-semibold text-2xl">
          {userData?.role}
        </p>
        <p className="text-center font-semibold mt-4">Type: {userData?.type}</p>
        <div className="flex justify-center">
          <button
            onClick={() => logOutUser()}
            className="flex items-center py-2 mt-6 px-6 rounded-lg bg-blue-800 text-white  text-xl uppercase gap-3 font-semibold"
          >
            Logout
            <span className="text-2xl">
              <LuLogOut />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
