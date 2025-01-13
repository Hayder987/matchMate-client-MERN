import { useState } from "react";
import { useTranslation } from "react-i18next";
import bd from '../../assets/logo/bd.png'
import uk from '../../assets/logo/uk.png'
import logo from '../../assets/logo/logo.jpg'

const NavBar = () => {


  // translation function
  const [lang, setLang] = useState(true)
  const { t, i18n } = useTranslation();
  const changeLanguage = async (language) => {
    setLang(!lang)
    // localStorage.setItem("lang", language);
    await i18n.changeLanguage(language);
  };

  return (
    <div className="flex py-3 px-2 md:px-6 justify-between items-center">
      {/* img */}
      <div className="">
       <div className="flex justify-center items-center gap-3">
        <img src={logo} alt="" className="w-10 h-10 md:w-14 md:h-14 rounded-full" />
        <h1 className="text-xl md:text-3xl font-bold text-pink-500"><span className="text-blue-800">Match</span>Mate</h1>
       </div> 
      </div>
      {/* menu */}
      <div className="">
        {/* menuitem */}
        <div className="">

        </div>
        {/* change Language */}
        <div className="cursor-pointer">
          {
            lang && <div onClick={()=> changeLanguage('en')} className="">
             <img src={bd} alt="" className="w-12 h-12 rounded-full" />
            </div>
          }
          {
            !lang && <div onClick={()=> changeLanguage('bn')} className="">  
             <img src={uk} alt="" className="w-12 h-12 rounded-full" />
            </div>
          }

        </div>
      </div>
    </div>
  );
};

export default NavBar;
