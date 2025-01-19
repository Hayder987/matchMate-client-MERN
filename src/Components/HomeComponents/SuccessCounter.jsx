import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import bio from "../../assets/logo/bio.png";
import male from "../../assets/logo/men.png";
import female from "../../assets/logo/women.png";
import merrige from "../../assets/logo/merriage.png";
import SectionTitle from "../commonComponents/SectionTitle";
import { useTranslation } from "react-i18next";

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
      <div className="bg-blue-900 py-24 lg:py-40 px-2"></div>
    </div>
  );
};

export default SuccessCounter;
