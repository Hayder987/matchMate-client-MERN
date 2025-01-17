import { useTranslation } from "react-i18next";
import { FaIdBadge } from "react-icons/fa";
import { FaLocationDot, FaRegCalendarDays } from "react-icons/fa6";
import { MdSensorOccupied, MdWorkspacePremium } from "react-icons/md";
import { PiGenderIntersexBold } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router";

const Card = ({ item }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate()

  return (
    <div>
      <div className="flex group cursor-pointer gap-6 p-2 shadow-md bg-white rounded-md">
        {/* img */}
        <div className="w-7/12 overflow-hidden rounded-md">
          <img
            src={item?.image}
            alt=""
            className="w-full group-hover:blur-sm group-hover:scale-125 duration-500 h-[250px] rounded-md"
          />
        </div>
        {/* text */}
        <div className="py-4 w-5/12 px-1 lg:px-4">
          <div className="flex mb-4 items-center justify-between text-3xl">
            <p className="flex  text-xl  items-center gap-2">
              <span className="">
                <FaIdBadge />
              </span>
              <span className="text-blue-800  font-bold">{item?.bioId}</span>
            </p>
            {pathname === "/" && (
              <div className="text-yellow-400">
                <MdWorkspacePremium />
              </div>
            )}
          </div>
          <p className="flex mb-3 items-center gap-2">
            <span className="">
              <FaRegCalendarDays />
            </span>
            <span className="">{item?.info?.age} Years</span>
          </p>
          <p className="flex mb-3 items-center gap-2">
            <span className="">
              <PiGenderIntersexBold />
            </span>
            <span className="">{item?.biodataType}</span>
          </p>
          <p className="flex mb-3 items-center gap-2">
            <span className="">
              <FaLocationDot />
            </span>
            <span className="">{item?.info?.permanentDivision}</span>
          </p>
          <div className="mt-6">
            <button
            onClick={()=>navigate(`/details/${item?.profileBioId}`)}
             className="btn text-sm py-2 px-4">{t("viewBtn")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
