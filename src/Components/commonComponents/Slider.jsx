const Slider = ({banner, header, desc}) => {
    return (
        <div className="">
        <div
          className="flex flex-col min-h-[60vh] lg:min-h-[80vh]"
          style={{
            backgroundImage:
              `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment:"fixed",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="mb-8 text-4xl md:text-6xl text-center font-bold text-white">
            {header}
          </h1>
          <p className="w-full text-center text-xl italic md:text-2xl font-medium text-gray-300 lg:w-6/12">
           {desc}
          </p>
        </div>
    </div>
  );
};

export default Slider;