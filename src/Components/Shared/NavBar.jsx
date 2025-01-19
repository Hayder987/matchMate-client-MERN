import { useState } from "react";
import { useTranslation } from "react-i18next";
import bd from "../../assets/logo/bd.png";
import uk from "../../assets/logo/uk.png";
import logo from "../../assets/logo/logo.jpg";
import { IoHome } from "react-icons/io5";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router";
import useAuth from "../../Context/useAuth";
import { RiMenuFold2Fill } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [menu, setMenu] = useState(false)

  const [lang, setLang] = useState(true);
  const { t, i18n } = useTranslation();
  const changeLanguage = async (language) => {
    setLang(!lang);
    // localStorage.setItem("lang", language);
    await i18n.changeLanguage(language);
  };

  return (
    <div className="flex py-3  sticky top-0 z-40 bg-slate-50 bg-opacity-60 backdrop-blur-md px-2 md:px-6 justify-between items-center">
      {/* img */}
      <div className="">
        <div className="flex justify-center items-center gap-3">
          <img
            src={logo}
            alt=""
            className="w-10 h-10 md:w-14 md:h-14 rounded-full"
          />
          <h1 className="text-xl md:text-3xl font-bold text-pink-500">
            <span className="text-blue-800">Match</span>Mate
          </h1>
        </div>
      </div>
      {/* menu */}
      <div className="flex  justify-center items-center gap-3 md:gap-6">
        {/* menuitem desktop*/}
        <div className="hidden lg:flex ">
          <ul className="flex font-medium cursor-pointer justify-center items-center gap-6">
            <NavLink to="/">
              <li className="flex items-center justify-center gap-1">
                <IoHome />
                {t("menu1")}
              </li>
            </NavLink>
            <NavLink to={"/bioData"}>
              <li className="flex items-center justify-center gap-1">
                {" "}
                <FaPerson />
                {t("menu2")}
              </li>
            </NavLink>
            <NavLink to={"/about"}>
              <li className="flex items-center justify-center gap-1">
                <BsInfoCircleFill />
                {t("menu3")}
              </li>
            </NavLink>
            <NavLink to={"/contact"}>
              <li className="flex items-center justify-center gap-1">
                <IoMdContact />
                {t("menu4")}
              </li>
            </NavLink>
            {user && (
              <NavLink to="dashboard">
                <li className="flex items-center justify-center gap-1">
                  <MdDashboard />
                  {t("menu5")}
                </li>
              </NavLink>
            )}
          </ul>
        </div>

        <button 
        onClick={()=>setMenu(!menu)}
        className="text-4xl flex lg:hidden cursor-pointer">
         {!menu?<RiMenuFold2Fill />:<VscChromeClose />}
        </button>

        {/* menuitem mobile*/}
        <div className={`${menu?"flex":"hidden"} bg-blue-200 relative duration-500 lg:hidden `}>
          <ul 
          onClick={()=>setMenu(!menu)}
          className={`flex py-6 absolute right-0 px-20 duration-500 z-10 ${menu?"top-12":"-top-[1452px]"}   flex-col bg-blue-200 font-medium cursor-pointer justify-center items-center gap-6`}>
            <NavLink to="/">
              <li className="flex items-center justify-center gap-1">
                <IoHome />
                {t("menu1")}
              </li>
            </NavLink>
            <NavLink to={"/bioData"}>
              <li className="flex items-center justify-center gap-1">
                {" "}
                <FaPerson />
                {t("menu2")}
              </li>
            </NavLink>
            <NavLink to={"/about"}>
              <li className="flex items-center justify-center gap-1">
                <BsInfoCircleFill />
                {t("menu3")}
              </li>
            </NavLink>
            <NavLink to={"/contact"}>
              <li className="flex items-center justify-center gap-1">
                <IoMdContact />
                {t("menu4")}
              </li>
            </NavLink>
            {user && (
              <NavLink to="dashboard">
                <li className="flex items-center justify-center gap-1">
                  <MdDashboard />
                  {t("menu5")}
                </li>
              </NavLink>
            )}
          </ul>
        </div>

        {loading ? (
          ""
        ) : (
          <div className="">
            {!user && (
              <button
                onClick={() => navigate("/login")}
                className="btn flex justify-center items-center gap-1  py-2  px-4 md:px-5"
              >
                <span className="text-xl">
                  <FiLogIn />
                </span>{" "}
                {t("login")}
              </button>
            )}
          </div>
        )}
        {/* change Language */}
        <div className="cursor-pointer">
          {lang && (
            <div onClick={() => changeLanguage("bn")} className="">
              <img src={uk} alt="" className="w-12 h-12 rounded-full" />
            </div>
          )}
          {!lang && (
            <div onClick={() => changeLanguage("en")} className="">
              <img src={bd} alt="" className="w-12 h-12 rounded-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
