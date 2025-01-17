import SectionDivider from "../../Components/commonComponents/SectionDivider";
import Banner from "../../Components/HomeComponents/Banner";
import PremiumCard from "../../Components/HomeComponents/PremiumCard";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <SectionDivider></SectionDivider>
           <div className="container mx-auto">
            <PremiumCard></PremiumCard>
            <SectionDivider></SectionDivider>
           </div>
        </div>
    );
};

export default Home;