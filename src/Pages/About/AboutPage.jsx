import { useTranslation } from "react-i18next";
import Banner from "../../assets/images/about Banner.jpg";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
    const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(${Banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="w-full flex justify-center p-8 md:p-14 lg:p-24 items-center min-h-screen"
    >
      <Helmet>
        <title>About Us || MatchMate</title>
      </Helmet>
      <div className="bg-slate-100 flex gap-10 flex-col lg:flex-row container mx-auto">
        {/* img */}
        <div className="lg:w-1/2">
          <img src={Banner} alt="" className=" w-full h-full" />
        </div>
        {/* text */}
        <div className="lg:w-1/2 px-3 py-10">
          <h1 className="text-3xl font-bold mb-4">{t('aboutTitle')}</h1>
          <p className="text-gray-600 font-medium text-xl mb-10">
            {t('aboutDesc')}
          </p>
          <h3 className="text-2xl font-bold mb-6">{t('aboutWhyTitle')}</h3>
          <ul className="list-disc flex flex-col gap-2 px-8 font-medium text-gray-800">
            <li className="">{t('aboutLi1')}</li>
            <li className="">{t('aboutLi2')}</li>
            <li className="">{t('aboutLi3')}</li>
            <li className="">{t('aboutLi4')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
