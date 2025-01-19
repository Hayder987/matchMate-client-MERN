import { useTranslation } from "react-i18next";
import SectionTitle from "../commonComponents/SectionTitle";
import WorkSectionCard from "./WorkSectionCard";
import profile from "../../assets/logo/createprofile.png";
import match from "../../assets/logo/match.png";
import chat from "../../assets/logo/chat.png";
import final from "../../assets/logo/final.png";

const HowItWork = () => {
  const { t } = useTranslation();

  return (
    <div>
      <SectionTitle
        title={t("howitworkTitle")}
        desc={t("howItWorkDesc")}
      ></SectionTitle>

      <div className="grid py-2 px-4 md:px-8 lg:px-12 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <WorkSectionCard
          logo={profile}
          title={t('workT1')}
          desc={t('workD1')}
        ></WorkSectionCard>

        <WorkSectionCard
          logo={match}
          title={t('workT2')}
          desc={t('workD2')}
        ></WorkSectionCard>

        <WorkSectionCard
          logo={chat}
          title={t('workT3')}
          desc={t('workD3')}
        ></WorkSectionCard>

        <WorkSectionCard
          logo={final}
          title={t('workT4')}
          desc={t('workD4')}
        ></WorkSectionCard>
      </div>
    </div>
  );
};

export default HowItWork;
