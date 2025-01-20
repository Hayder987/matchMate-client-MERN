const WorkSectionCard = ({ logo, title, desc }) => {
  return (
    <div>
      <div className="flex p-8 rounded-md bg-white shadow-lg flex-col justify-center items-center h-full">
        <div className="flex-grow flex justify-center items-center">
          <img src={logo} alt="" className="mb-6 max-h-20" />
        </div>
        <div className="flex flex-col flex-grow">
          <h1 className="text-center text-2xl font-bold mb-4">{title}</h1>
          <p className="text-center text-gray-600 font-medium">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkSectionCard;
