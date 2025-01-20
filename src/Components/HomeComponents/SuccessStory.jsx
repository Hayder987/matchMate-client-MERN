import { useTranslation } from "react-i18next";
import SectionTitle from "../commonComponents/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import { Rating } from "@smastrom/react-rating";
import { format } from "date-fns";

const SuccessStory = () => {
  const { t } = useTranslation();
  const serverUrl = useAxiosPublic();

  const { data: allReviewPublic = [], isLoading: allReviewPublicLoading } =
    useQuery({
      queryKey: ["allReviewPublic"],
      queryFn: async () => {
        const { data } = await serverUrl(`/reviewAllPublic`);
        return data;
      },
    });


  return (
    <div>
      <SectionTitle
        title={t("successStory")}
        desc={t("successdesc")}
      ></SectionTitle>
      {/* slider */}
      <div className="">
        <Swiper
          navigation={true}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={1000}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {allReviewPublic.map((item) => (
            <SwiperSlide key={item?._id}>
              <div className="pb-4 border md:pb-8 lg:pb-14">
                <img
                  src={item?.imgUrl}
                  alt=""
                  className="w-full h-[220px] md:h-[280px] lg:h-[400px]"
                />
                <div className="flex justify-center items-center my-3">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={item?.rating}
                    readOnly
                  />
                </div>
                <div className="">
                  <h1 className="text-center mb-4 text-xl font-medium text-gray-600">
                    {item?.marriageDate
                      ? format(new Date(item?.marriageDate), "PP")
                      : "No Marriage date available"}
                  </h1>
                  <p className="text-center px-6">
                    {item?.storyDesc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SuccessStory;
