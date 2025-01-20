import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";
import Swal from "sweetalert2";
import imgUpload from "../../../api/imgUpload";
import useAxiosSecure from "../../../hooks/axios/useAxiosSecure";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet-async";

const GotMarried = () => {
  const [rating, setRating] = useState(0);
  const [imgPath, setImgPath] = useState("");
  const [imgPreview, setImgPreview] = useState("");
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate ] = useState(new Date())

  useEffect(() => {
    if (imgPath) {
      const imageURL = URL.createObjectURL(imgPath);
      setImgPreview(imageURL);
      return () => URL.revokeObjectURL(imageURL);
    }
  }, [imgPath, setImgPreview]);

  const reviewHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userbio = form.userbio.value;
    const partnerbio = form.partnerbio.value;
    const storyDesc = form.storyDesc.value;


    if (!rating) {
      Swal.fire({
        title: "Please Give Rating!",
        icon: "info",
        draggable: true,
      });
      return;
    }

    if (!imgPath) {
      Swal.fire({
        title: "Please Upload Image!",
        icon: "info",
        draggable: true,
      });
      return;
    }
    try {
      const imgUrl = await imgUpload(imgPath);
      const reviewData = {
        userbio,
        partnerbio,
        storyDesc,
        rating,
        imgUrl,
        marriageDate:startDate
      };
      await axiosSecure.post(`/addReviewData`, reviewData);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Review Added SuccessFully!",
        showConfirmButton: false,
        timer: 1500,
      });
      form.reset();
      setImgPreview("");
      setImgPath("");
      setRating(0);
      setStartDate(new Date)
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: err.message || "An error occurred",
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Got Married</title>
      </Helmet>
      <div className=" p-4 md:p-8">
        <div className="lg:max-w-[800px] border mx-auto p-4 lg:p-6">
          <form onSubmit={reviewHandler} className="">
            {/* bio Id */}
            <div className="flex flex-col md:flex-row justify-center  items-center gap-6">
              {/* userbio */}
              <div className="w-full">
                <label className="block font-medium mb-2">User BioId</label>
                <input
                  type="number"
                  name="userbio"
                  placeholder="Enter Your Bio"
                  required
                  className=" w-full px-3 py-2 "
                />
              </div>
              {/* parter bio */}
              <div className="w-full">
                <label className="block font-medium mb-2">Partner BioId</label>
                <input
                  type="number"
                  name="partnerbio"
                  placeholder="Enter partner Bio"
                  required
                  className=" w-full px-3 py-2 "
                />
              </div>
              <div className="w-full">
                <label className="block font-medium mb-2">Marriage Date</label>
                <div className=" w-full ">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="w-full cursor-pointer  px-3 py-2"
                  />
                </div>
              </div>
            </div>
            {/* description */}
            <div className="mt-6">
              <label className="block font-medium mb-2">Share Your Story</label>
              <textarea
                name="storyDesc"
                cols="30"
                rows="5"
                required
                placeholder="Write Success Story Review"
                className="w-full resize-none"
              ></textarea>
            </div>
            {/* review rating*/}
            <div className="flex flex-col gap-3 justify-center items-center py-6">
              <Rating
                style={{ maxWidth: 200 }}
                value={rating}
                onChange={setRating}
                isRequired
              />
              <p className="text-gray-600 font-medium text-xl">
                Rating This Site
              </p>
            </div>
            {/* upload Image */}
            <div className="">
              <label className="block font-medium mb-2 mt-4">
                <input
                  type="file"
                  className="w-full hidden"
                  accept="image/*"
                  name="photo"
                  onChange={(e) => setImgPath(e.target.files[0])}
                />
                <div className="border-2 flex gap-3 flex-col md:flex-row border-dashed w-full cursor-pointer  p-6 ">
                  <p className="flex text-6xl hover:text-blue-800 text-gray-700 gap-3 justify-center items-center w-full">
                    <TbPhotoPlus />
                    <span className="text-3xl ">Photo</span>
                  </p>
                  {/* img preview */}
                  {imgPreview && (
                    <div className="">
                      <img src={imgPreview} alt="" className="w-28 h-20" />
                    </div>
                  )}
                </div>
              </label>
            </div>
            <div className="mt-6">
              <input
                type="submit"
                value="Submit Review"
                className="bg-blue-800 font-semibold duration-300 hover:text-black hover:bg-blue-300 w-full cursor-pointer text-white py-2 px-4"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GotMarried;
