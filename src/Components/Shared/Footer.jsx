import { useTranslation } from "react-i18next";
import logo from "../../assets/logo/logo.jpg";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router";
import { SiGmail } from "react-icons/si";
import visa from '../../assets/logo/visa.png'
import master from '../../assets/logo/master.png'
import paypal from '../../assets/logo/paypal.png'
import pionear from '../../assets/logo/paynear.png'
import express from '../../assets/logo/express.png'

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="py-16 bg-[#141d2a] text-slate-200">
      <div className="container mx-auto p-4">
        <div className="w-full mb-10 flex justify-center flex-col items-center md:max-w-[700px] lg:max-w-[1000px] mx-auto">
          <div className="flex mb-6 justify-center items-center gap-3">
            <img src={logo} alt="" className="w-14 h-14 rounded-full" />
            <h1 className="text-xl md:text-3xl font-bold text-pink-500">
              <span className="text-gray-100">Match</span>Mate
            </h1>
          </div>
          <p className="text-center text-xl font-medium text-gray-400">
            {t("footerText")}
          </p>
        </div>
        <div className="border-b-2 mb-10 border-gray-600"></div>
        <div className="flex justify-center items-center">
          <ul className="flex flex-wrap text-center cursor-pointer gap-4 text-xl">
            <Link to="/">
              <li className="">{t("menu1")}</li>
            </Link>
            <Link to={'/bioData'}><li className="">{t("menu2")}</li></Link>
            <Link to={'/about'}><li className="">{t("menu3")}</li></Link>
            <Link to="/contact"><li className="">{t("menu4")}</li></Link>
          </ul>
        </div>
        <div className=" flex flex-col lg:flex-row ">
          <div className="lg:w-1/2 flex flex-col lg:flex-row justify-center items-center">
            <div className="flex items-center gap-4 text-3xl mt-6">
              <button className="hover:text-blue-800">
                <FaFacebook />
              </button>
              <button className="hover:text-blue-800">
                <BsTwitterX />
              </button>
              <button className="hover:text-blue-800">
                <FaInstagramSquare />
              </button>
              <button className="hover:text-blue-800">
                <SiGmail />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center items-center">
            <div className="flex flex-wrap items-center gap-4 py-4">
            <img src={visa} alt="" className="w-20" />
            <img src={pionear} alt="" className="w-16" />
            <img src={express} alt="" className="w-20" />
            <img src={master} alt="" className="w-20" />
            <img src={paypal} alt="" className="w-16" />
            </div>
          </div>
        </div>
        <div className="border-b-2 mb-6 border-gray-600"></div>
        <p className="text-center text-xl text-gray-400">© {new Date().getFullYear()} <strong>MatchMate</strong>. All rights reserved by Hayder</p>
      </div>
    </div>
  );
};

export default Footer;
