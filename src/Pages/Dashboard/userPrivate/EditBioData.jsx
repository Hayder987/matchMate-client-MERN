import LoaderSpinner from "../../../Components/commonComponents/LoaderSpinner";
import AddBioData from "../../../Components/dashboardComponents/AddBioData";
import BioDataEdit from "../../../Components/dashboardComponents/BioDataEdit";
import useUserData from "../../../hooks/data/useUserData";

const EditBioData = () => {
    const [userData, isLoading, refetch] = useUserData()
    if(isLoading){
        return <LoaderSpinner></LoaderSpinner>
    } 

    return (
        <div className="p-6">

          {userData?.status==="unregistered"?
          <AddBioData refetch={refetch}></AddBioData>:
          <BioDataEdit></BioDataEdit>
          } 
        </div>
    );
};

export default EditBioData;