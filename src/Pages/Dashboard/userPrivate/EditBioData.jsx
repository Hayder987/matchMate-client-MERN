import LoaderSpinner from "../../../Components/commonComponents/LoaderSpinner";
import AddBioData from "../../../Components/dashboardComponents/AddBioData";
import BioDataEdit from "../../../Components/dashboardComponents/BioDataEdit";
import useUserData from "../../../hooks/data/useUserData";

const EditBioData = () => {
    const [userData, isLoading] = useUserData()
    if(isLoading){
        return <LoaderSpinner></LoaderSpinner>
    } 

    return (
        <div className="p-6">

          {userData?.status==="unregistered"?
          <AddBioData></AddBioData>:
          <BioDataEdit></BioDataEdit>
          } 
        </div>
    );
};

export default EditBioData;