import { Outlet } from "react-router";
import NavBar from "../Components/Shared/NavBar";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
