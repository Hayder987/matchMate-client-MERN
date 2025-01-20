import { Helmet } from "react-helmet-async";
import SectionDivider from "../../Components/commonComponents/SectionDivider";
import Banner from "../../Components/HomeComponents/Banner";
import HowItWork from "../../Components/HomeComponents/HowItWork";
import PremiumCard from "../../Components/HomeComponents/PremiumCard";
import SuccessCounter from "../../Components/HomeComponents/SuccessCounter";
import SuccessStory from "../../Components/HomeComponents/SuccessStory";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || MatchMate</title>
            </Helmet>
           <Banner></Banner>
           <SectionDivider></SectionDivider>
           <div className="container mx-auto">
            <PremiumCard></PremiumCard>
            <SectionDivider></SectionDivider>
            <HowItWork></HowItWork>
            <SectionDivider></SectionDivider>
           </div>
           <SuccessCounter></SuccessCounter>
           <SectionDivider></SectionDivider>
           <div className="container mx-auto">
            <SuccessStory></SuccessStory>
           </div>
           <SectionDivider></SectionDivider>
        </div>
    );
};

export default Home;