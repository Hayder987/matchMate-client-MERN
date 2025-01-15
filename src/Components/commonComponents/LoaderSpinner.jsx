import { ThreeCircles } from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <div className="PX-12 PY-16 flex justify-center items-center">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#1e40af"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default LoaderSpinner;
