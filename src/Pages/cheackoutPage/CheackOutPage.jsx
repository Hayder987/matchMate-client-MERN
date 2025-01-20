import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";
import LoaderSpinner from "../../Components/commonComponents/LoaderSpinner";
import useAuth from "../../Context/useAuth";
import Stripe from "../../Stripe/Stripe";
import { Helmet } from "react-helmet-async";

const CheackOutPage = () => {
  const { biodataId } = useParams();
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()


  const { data: userContactBioData, isLoading: contactBioDataLoading } =
    useQuery({
      queryKey: ["userContactBioData", biodataId],
      queryFn: async () => {
        const { data } = await axiosSecure(`/contactBiodata/${biodataId}`);
        return data;
      },
    });


  return (
    <div className="py-12">
      <Helmet>
        <title>Cheack || MatchMate</title>
      </Helmet>
      <div className="">
        {contactBioDataLoading ? (
          <LoaderSpinner></LoaderSpinner>
        ) : (
          <div className="container flex gap-10 flex-col lg:flex-row bg-white p-2 md:p-6 lg:p-10 mx-auto">
            {/* image */}
            <div className="lg:w-7/12">
              <img
                src={userContactBioData?.image}
                alt=""
                className="w-full object-cover h-full"
              />
            </div>
            {/* form */}
            <div className="lg:w-5/12 flex justify-center ">
              <div className="">
              <div className="w-full flex justify-center gap-4">
                    {/* id */}
                    <div className="w-full">
                      <label className="block font-medium mb-2">BioId</label>
                      <input
                        type="number"
                        name="bioId"
                        value={biodataId}
                        readOnly
                        placeholder="Enter Name"
                        required
                        className=" w-full px-3 py-2 bg-blue-100"
                      />
                    </div>
                    {/* name */}
                    <div className="w-full">
                      <label className="block font-medium mb-2">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        value={user?.email}
                        readOnly
                        placeholder="Enter Name"
                        required
                        className=" w-full px-3 py-2 bg-blue-100"
                      />
                    </div>
                  </div>
                  {/* stripe */}
                  <div className="">
                    <p className="mb-10 mt-6">Give 5 dollar for Access</p>
                    <Stripe 
                    userContactBioData={userContactBioData}
                    ></Stripe>
                  </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheackOutPage;
