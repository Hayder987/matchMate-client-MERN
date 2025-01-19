import { useTranslation } from "react-i18next";
import { FaIdBadge, FaLocationDot, FaRegCalendarDays } from "react-icons/fa6";
import { PiGenderIntersexBold } from "react-icons/pi";
import { useNavigate } from "react-router";

const AllBioCard = ({ item }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div>
      <div className=" group cursor-pointer gap-6 p-2 shadow-md bg-white rounded-md">
        {/* img */}
        <div className=" overflow-hidden rounded-md">
          <img
            src={item?.image}
            alt=""
            className="w-full group-hover:blur-sm group-hover:scale-125 duration-500 h-[210px] rounded-md"
          />
        </div>
        {/* text */}
        <div className="py-4 px-1 lg:px-4">
          <div className="flex mb-4 items-center justify-between">
            <p className="flex items-center gap-2">
              <span className="">
                <FaIdBadge />
              </span>
              <span className="text-blue-800  font-bold">{item?.bioId}</span>
            </p>
            <p className="flex mb-3 items-center gap-2">
              <span className="">
                <FaRegCalendarDays />
              </span>
              <span className="">{item?.info?.age} Years</span>
            </p>
          </div>

          <div className="flex mb-4 items-center justify-between">
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
          </div>
          <div className="mt-6">
            <button
              onClick={() => navigate(`/details/${item?._id}`)}
              className="btn text-sm py-2 px-4"
            >
              {t("viewBtn")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBioCard;
