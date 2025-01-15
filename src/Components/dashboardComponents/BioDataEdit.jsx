import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const height = [];

for (let feet = 4; feet <= 7; feet++) {
  for (let inches = 0; inches < 12; inches++) {
    height.push(`${feet}'${inches}"`);
  }
}

const weightData = [];
for (let weight = 30; weight <= 150; weight++) {
  weightData.push(`${weight}`);
}

const occupations = [
  "Doctor",
  "Engineer",
  "Teacher",
  "Lawyer",
  "Businessperson",
  "Government Employee",
  "Freelancer",
  "Artist",
  "Student",
  "Other",
];
const raceData = ["Fair", "Wheatish", "Dusky", "Dark", "Other"];
const divisions = [
  "Dhaka",
  "Chattagra",
  "Rangpur",
  "Barisal",
  "Khulna",
  "Mymensingh",
  "Sylhet",
];

const BioDataEdit = () => {
  const [age, setAge] = useState("");
  const [partenerAge, setPartnerAge] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="px-1 md:px-4 lg:px-16">
      <h1 className="md:text-2xl font-medium text-center mb-8 text-gray-800 ">
        You Can Edit Your BioData Here
      </h1>
      <form className="">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
          {/* d-1 */}
          <div className="lg:w-1/2 flex flex-col gap-4">
            {/*data type  */}
            <div className="w-full">
              <label className="block font-medium mb-2">Biodata Type</label>
              <select
                name="biodataType"
                required
                className="border w-full px-3 py-2 bg-blue-100"
              >
                <option value="">Biodata Type</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            {/* name */}
            <div className="w-full">
              <label className="block font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                required
                className=" w-full px-3 py-2 bg-blue-100"
              />
            </div>
            {/* height */}
            <div className="w-full">
              <label className="block font-medium mb-2">Height</label>
              <select
                name="height"
                required
                className=" bg-blue-100 w-full px-3 py-2"
              >
                <option value="">Height</option>
                {height.map((height, index) => (
                  <option key={index} value={height}>
                    {height}
                  </option>
                ))}
              </select>
            </div>
            {/* wight */}
            <div className="w-full">
              <label className="block font-medium mb-2">Weight</label>
              <select
                name="weight"
                required
                className=" w-full bg-blue-100 px-3 py-2"
              >
                <option value="">Weight</option>
                {weightData.map((weight, index) => (
                  <option key={index} value={weight}>
                    {weight} Kg
                  </option>
                ))}
              </select>
            </div>
            {/* age */}
            <div className="w-full">
              <label className="block font-medium mb-2">Age</label>
              <input
                type="number"
                name="age"
                min={1}
                max={99}
                value={age}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 2) {
                    setAge(value);
                  }
                }}
                placeholder="Enter Age"
                required
                className="border w-full px-3 py-2 bg-blue-100"
              />
            </div>
            {/* race */}
            <div className=" w-full">
              <label className="block font-medium mb-2">Skin Color</label>
              <select
                name="race"
                required
                className="border w-full px-3 py-2 bg-blue-100"
              >
                <option value="">Skin Color</option>
                {raceData.map((race, index) => (
                  <option key={index} value={race}>
                    {race}
                  </option>
                ))}
              </select>
            </div>
            {/* presen */}
            <div className="w-full">
              <label className="block font-medium mb-2">Present Division</label>
              <select
                name="presentDivision"
                required
                className="border w-full px-3 py-2 bg-blue-100"
              >
                <option value="">Present Division</option>
                {divisions.map((division, index) => (
                  <option key={index} value={division}>
                    {division}
                  </option>
                ))}
              </select>
            </div>
            {/* division */}
            <div className="w-full">
              <label className="block font-medium mb-2">
                Permanent Division
              </label>
              <select
                name="permanentDivision"
                required
                className="border w-full px-3 py-2 bg-blue-100"
              >
                <option value="">Permanent Division</option>
                {divisions.map((division, index) => (
                  <option key={index} value={division}>
                    {division}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* d-2 */}
          <div className="lg:w-1/2 flex flex-col gap-4">
            {/* ocupation */}
            <div className="">
              <label className="block font-medium mb-2">Occupation</label>
              <select
                name="occupation"
                required
                className="border w-full px-3 py-2 bg-blue-100"
              >
                <option value="">Select Occupation</option>
                {occupations.map((occupation, index) => (
                  <option key={index} value={occupation}>
                    {occupation}
                  </option>
                ))}
              </select>
            </div>
            {/* phone */}
            <div className="">
              <label className="block font-medium mb-2">Mobile Number</label>
              <input
                type="tel"
                name="mobileNumber"
                required
                pattern="^\+?[1-9]\d{1,14}$"
                placeholder="+8801xxxxxxxxx"
                className="border w-full px-3 py-2 bg-blue-100"
              />
            </div>
            {/* date */}
            <div className="">
              <label className="block font-medium mb-2">Date of birth</label>
              <div className="bg-blue-100 w-full ">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-full cursor-pointer bg-blue-100 px-3 py-2"
                />
              </div>
            </div>

            {/* fathername */}
            <div className="w-full">
              <label className="block font-medium mb-2">Father Name</label>
              <input
                type="text"
                name="fathername"
                placeholder="Enter Father Name"
                required
                className=" w-full px-3 py-2 bg-blue-100"
              />
            </div>
            {/* mother Name */}
            <div className="w-full">
              <label className="block font-medium mb-2">Mother Name</label>
              <input
                type="text"
                name="mothername"
                placeholder="Enter Mother Name"
                required
                className=" w-full px-3 py-2 bg-blue-100"
              />
            </div>
            {/* height */}
            <div className="w-full">
              <label className="block font-medium mb-2">
                Expected Partner Height
              </label>
              <select
                name="expectedHeight"
                required
                className=" bg-blue-100 w-full px-3 py-2"
              >
                <option value="">Height</option>
                {height.map((height, index) => (
                  <option key={index} value={height}>
                    {height}
                  </option>
                ))}
              </select>
            </div>
            {/* wight */}
            <div className="w-full">
              <label className="block font-medium mb-2">
                Expected Partner Weight
              </label>
              <select
                name="expectedWeight"
                required
                className=" w-full bg-blue-100 px-3 py-2"
              >
                <option value="">Weight</option>
                {weightData.map((weight, index) => (
                  <option key={index} value={weight}>
                    {weight} Kg
                  </option>
                ))}
              </select>
            </div>
            {/* age */}
            <div className="w-full">
              <label className="block font-medium mb-2">
                Expected Partner Age
              </label>
              <input
                type="number"
                name="partnerage"
                min={1}
                max={99}
                value={partenerAge}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 2) {
                    setPartnerAge(value);
                  }
                }}
                placeholder="Enter Age"
                required
                className="border w-full px-3 py-2 bg-blue-100"
              />
            </div>
          </div>
        </div>
        {/* email */}
        <div className="w-full">
          <label className="block font-medium mb-2 mt-4">Contact Email</label>
          <input
            type="email"
            name="email"
            readOnly
            required
            className=" w-full px-3 py-2 hover:cursor-not-allowed bg-blue-100"
          />
        </div>
        {/* upload images */}
        <div className="flex flex-col lg:flex-row gap-4 ">
          {/* upload */}
          <div className="lg:w-1/2 ">
            <label className="block font-medium mb-2 mt-4">
              <input
                type="file"
                className="w-full hidden"
                accept="image/*"
                name="photo"
              />
              <div className="border-2 border-dashed w-full cursor-pointer  p-4 ">
                <p className="text-center py-3 bg-blue-800 text-white font-semibold">
                  Upload Image
                </p>
              </div>
            </label>
          </div>
          {/* preview */}
          <div className="lg:w-1/2 py-3 mt-1">
            <div className="w-full border h-full"></div>
          </div>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="Save And Publish Now "
            className="p-3 bg-blue-800 font-semibold cursor-pointer mt-3 text-white w-full rounded-none"
          />
        </div>
      </form>
    </div>
  );
};

export default BioDataEdit;
