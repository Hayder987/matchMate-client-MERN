import PageMargin from "../../Components/commonComponents/PageMargin";
import loginBanner from "../../assets/images/loginBanner2.jpg";
import banner from "../../assets/images/LoginBg.jpg";
import { useTranslation } from "react-i18next";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../Context/useAuth";

const Login = () => {
  const { t } = useTranslation();
  const { loginUser, googleLogin } = useAuth();
  const navigate = useNavigate()

  const loginHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: t("loginSwal"),
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/')

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: err.message || "An error occurred",
      });
      
    }
  };

  const googleLoginHandler= async()=>{
      try{
        await googleLogin()
        navigate('/')
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: t('loginSwal'),
          showConfirmButton: false,
          timer: 1500
        });
       }
       catch(err){
        Swal.fire({
            icon: "error",
            title: err.message || "An error occurred",
        });
        
       }
      
    }

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
            <h1 className="text-white font-semibold text-2xl md:text-4xl mb-10">
              {t("login")}
            </h1>
            <form onSubmit={loginHandler} className="">
              <div className="mb-8">
                <label className="text-white uppercase">{t("email")}</label>

                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full border-b-2 text-white focus:text-black border-blue-800 duration-300 py-1 focus:py-2 outline-none bg-transparent focus:bg-blue-100 px-4 shadow-sm"
                />
              </div>
              <div className="mb-10">
                <label className="text-white uppercase">{t("password")}</label>

                <input
                  type="password"
                  name="password"
                  required
                  className="mt-1 w-full border-b-2 text-white focus:text-black border-blue-800 duration-300 py-1 focus:py-2 outline-none bg-transparent focus:bg-blue-100 px-4 shadow-sm"
                />
              </div>
              <input
                type="submit"
                value={t("login")}
                className="btn w-full cursor-pointer uppercase py-3 px-6"
              />
            </form>
            <span className="flex items-center">
              <span className="h-px flex-1 bg-blue-800"></span>
              <span className="shrink-0 px-6 text-gray-100 py-10">
                {t("or")}
              </span>
              <span className="h-px flex-1 bg-blue-800"></span>
            </span>
            <button 
            onClick={googleLoginHandler}
            className="flex bg-blue-200 rounded-md font-semibold hover:bg-blue-800 hover:text-gray-100 justify-center items-center gap-2 p-3 w-full">
              <span className="text-2xl">
                <FcGoogle />
              </span>
              <span className="uppercase">{t("google")}</span>
            </button>
            <p className="mt-6 text-gray-100 text-center">
              <span className="">{t("loginMisc1")}</span>
              <Link to="/register">
                <span className="text-blue-500 cursor-pointer">
                  {" "}
                  {t("loginMisc2")}
                </span>
              </Link>
            </p>
          </div>
        </div>
      </PageMargin>
    </div>
  );
};

export default Login;
