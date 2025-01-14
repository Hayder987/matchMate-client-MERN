import useAuth from "../../Context/useAuth";

const Dashboard = () => {
    const {logOutUser}  = useAuth()
    return (
        <div>
           <button
           onClick={()=>logOutUser()}
            className="">Logout</button>
        </div>
    );
};

export default Dashboard;