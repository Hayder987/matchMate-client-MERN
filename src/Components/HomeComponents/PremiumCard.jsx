import { useTranslation } from "react-i18next";
import SectionTitle from "../commonComponents/SectionTitle";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import Card from "../commonComponents/Card";
import LoaderSpinner from "../commonComponents/LoaderSpinner";

const PremiumCard = () => {
    const { t } = useTranslation();
    const [ageValue, setAgeValue] = useState("-1")
    const serverUrl = useAxiosPublic()

    const {data:premiumUser=[],isLoading:premiumUserLoading } = useQuery({
        queryKey:['premiumUser',ageValue],
        queryFn: async()=>{
        const {data}= await serverUrl.get(`/premiumUser?age=${parseInt(ageValue)}`)
        return data
        }
    })

    return (
        <div>
            <SectionTitle
            title={t("premiumTitle")}
            desc={t('premiumDesc')}
            ></SectionTitle>
            <div className="flex justify-between mb-10 bg-blue-100 py-2 px-4 items-center">
                <div className=""></div>
                <div className="">
                    <select
                    onChange={(e)=>setAgeValue(e.target.value)}
                    className="bg-blue-800 cursor-pointer text-white px-10 font-medium rounded-md" 
                    name="" id="">
                        <option  value="-1" className="bg-blue-100  text-black">
                            Age High to Low</option>
                        <option value="1" className="bg-blue-100  text-black">Age Low to High</option>
                    </select>
                </div>
            </div>
            {
             premiumUserLoading?<LoaderSpinner></LoaderSpinner>:
             <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {
                    premiumUser.map(item => <Card item={item} key={item?._id}></Card>)
                }
            </div>
            }
        </div>
    );
};

export default PremiumCard;