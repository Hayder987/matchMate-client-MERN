import { Outlet, useLocation } from "react-router";
import NavBar from "../Components/Shared/NavBar";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
  const {pathname} = useLocation()
  console.log(pathname)
  return (
    <div className="bg-slate-50">
      {!pathname.startsWith('/dashboard') && <NavBar />}
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet></Outlet>
      </div>
      {!pathname.startsWith('/dashboard') && <Footer></Footer>}
      
    </div>
  );
};

export default MainLayout;
