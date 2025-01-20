import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import bio from "../../assets/logo/bio.png";
import male from "../../assets/logo/men.png";
import female from "../../assets/logo/women.png";
import merrige from "../../assets/logo/merriage.png";
import SectionTitle from "../commonComponents/SectionTitle";
import { useTranslation } from "react-i18next";
import LoaderSpinner from "../commonComponents/LoaderSpinner";

const SuccessCounter = () => {
  const serverUrl = useAxiosPublic();
  const { t } = useTranslation();

  const { data: publicInfo = {}, isLoading: publicLoading } = useQuery({
    queryKey: ["publicInfo"],
    queryFn: async () => {
      const { data } = await serverUrl.get(`/publicData`);
      return data;
    },
  });

  return (
    <div>
      <SectionTitle
        title={t("successTitle")}
        desc={t("successDesc")}
      ></SectionTitle>
      <div className="bg-blue-800 py-24 lg:py-36 px-2">
        {publicLoading ? (
          <LoaderSpinner></LoaderSpinner>
        ) : (
          <div className="container grid px-4 md:px-8 lg:px-14 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
            {/* 1 */}
            <div className="flex gap-6 justify-center items-center">
              <div className=" ">
                <div className="bg-blue-700 w-32 h-32  p-6 rounded-full">
                  <img src={bio} alt="" className="w-20 h-20" />
                </div>
              </div>
              <div className="">
                <h1 className="text-6xl mb-2 text-white font-bold">
                  {publicInfo?.totalBio}+
                </h1>
                <p className="text-pink-400 font-semibold text-2xl">
                  Total Bio
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex gap-6 justify-center items-center">
              <div className=" ">
                <div className="bg-blue-700 w-32 h-32  p-6 rounded-full">
                  <img src={female} alt="" className="w-20 h-20" />
                </div>
              </div>
              <div className="">
                <h1 className="text-6xl mb-2 text-white font-bold">
                {publicInfo?.female}
                </h1>
                <p className="text-pink-400 font-semibold text-2xl">
                  Female
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="flex gap-6 justify-center items-center">
              <div className=" ">
                <div className="bg-blue-700 w-32 h-32  p-6 rounded-full">
                  <img src={male} alt="" className="w-20 h-20" />
                </div>
              </div>
              <div className="">
                <h1 className="text-6xl mb-2 text-white font-bold">
                  {publicInfo?.male}
                </h1>
                <p className="text-pink-400 font-semibold text-2xl">
                  Male
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className="flex gap-6 justify-center items-center">
              <div className=" ">
                <div className="bg-blue-700 w-32 h-32  p-6 rounded-full">
                  <img src={merrige} alt="" className="w-20 h-20" />
                </div>
              </div>
              <div className="">
                <h1 className="text-6xl mb-2 text-white font-bold">
                  {publicInfo?.marriage}+
                </h1>
                <p className="text-pink-400 font-semibold text-2xl">
                  Marriage
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuccessCounter;
