import { useTranslation } from "react-i18next";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import PageMargin from "../../Components/commonComponents/PageMargin";
import loginBanner from "../../assets/images/loginBanner2.jpg";
import banner from "../../assets/images/LoginBg.jpg";
import { FaImage } from "react-icons/fa6";

const Register = () => {
  const { t } = useTranslation();
  return (
    <div
      className="flex flex-col min-h-[calc(100vh-80px)]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PageMargin>
        <div className="flex flex-col lg:flex-row gap-4 lg:max-w-[1000px] mx-auto rounded-lg justify-center bg-black bg-opacity-30 p-6 md:p-10 ">
          {/* img */}
          <div className="lg:w-1/2 px-8">
            <img
              src={loginBanner}
              alt=""
              className="rounded-md w-full h-full"
            />
          </div>

          {/* form */}
          <div className="lg:w-1/2 p-6 md:p-10">
            <h1 className="text-white font-semibold text-2xl md:text-4xl mb-8">
              {t("Register")}
            </h1>
            <form className="">
              {/* name */}
              <div className="mb-6">
                <label className="text-white uppercase">{t("name")}</label>

                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 w-full border-b-2 text-black border-blue-800 duration-300 py-1 focus:py-2 outline-none bg-transparent focus:bg-blue-100 px-4 shadow-sm"
                />
              </div>

              {/* email */}
              <div className="mb-6">
                <label className="text-white uppercase">{t("email")}</label>

                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full border-b-2 text-black border-blue-800 duration-300 py-1 focus:py-2 outline-none bg-transparent focus:bg-blue-100 px-4 shadow-sm"
                />
              </div>
              {/* password */}
              <div className="mb-8">
                <label className="text-white uppercase">{t("password")}</label>

                <input
                  type="password"
                  name="password"
                  required
                  className="mt-1 w-full border-b-2 text-black border-blue-800 duration-300 py-1 focus:py-2 outline-none bg-transparent focus:bg-blue-100 px-4 shadow-sm"
                />
              </div>
              {/* image Upload */}
              <div className="mb-6">
                <label className="text-white uppercase">
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    className="hidden"
                  />
                  <div className="border-2 flex items-center gap-3 border-dashed border-blue-800 p-2 px-4 cursor-pointer">
                  <span className=""><FaImage /></span> {t('uploadImg')} 
                  </div>
                </label>
              </div>
              <input
                type="submit"
                value={t("register")}
                className="btn w-full cursor-pointer uppercase py-3 px-6"
              />
            </form>
            <span className="flex items-center">
              <span className="h-px flex-1 bg-blue-800"></span>
              <span className="shrink-0 px-6 text-gray-100 py-8">
                {t("or")}
              </span>
              <span className="h-px flex-1 bg-blue-800"></span>
            </span>
            <button className="flex bg-blue-200 rounded-md font-semibold hover:bg-blue-800 hover:text-gray-100 justify-center items-center gap-2 p-3 w-full">
              <span className="text-2xl">
                <FcGoogle />
              </span>
              <span className="uppercase">{t("google")}</span>
            </button>
            <p className="mt-6 text-gray-100 text-center">
              <span className="">{t("loginMisc3")}</span>
              <Link to="/login">
                <span className="text-blue-500 cursor-pointer">
                  {" "}
                  {t("loginMisc4")}
                </span>
              </Link>
            </p>
          </div>
        </div>
      </PageMargin>
    </div>
  );
};

export default Register;
