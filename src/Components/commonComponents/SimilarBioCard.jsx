const SimilarBioCard = ({ item }) => {
  return (
    <div className="border  p-3">
      <div className="mb-2 overflow-hidden">
        <img src={item?.image} alt="" className="w-full hover:scale-110 duration-500 h-[250px]" />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          <span className="font-semibold">Name: </span>
          <span className="">{item?.info.name}</span>
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Age: </span>
          <span className="">{item?.info.age} Years</span>
        </p>
      </div>
    </div>
  );
};

export default SimilarBioCard;
