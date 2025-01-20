
import { Helmet } from "react-helmet-async";
import LoaderSpinner from "../../../Components/commonComponents/LoaderSpinner";
import AddBioData from "../../../Components/dashboardComponents/AddBioData";
import BioDataEdit from "../../../Components/dashboardComponents/BioDataEdit";
import useUserData from "../../../hooks/data/useUserData";

const EditBioData = () => {
    const [userData, isLoading, userRefetch] = useUserData()
    

      if(isLoading){
        return <LoaderSpinner></LoaderSpinner>
    } 
    
      

    return (
        <div className="p-6">
          <Helmet>
            <title>Edit Bio || MatchMate</title>
          </Helmet>

          {userData?.status==="unregistered"?
          <AddBioData userRefetch={userRefetch}></AddBioData>:
          <BioDataEdit></BioDataEdit>
          } 
        </div>
    );
};

export default EditBioData;