import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/axios/useAxiosSecure";
import LoaderSpinner from "../../../Components/commonComponents/LoaderSpinner";
import men from "../../../assets/logo/men.png";
import women from "../../../assets/logo/women.png";
import bioImg from "../../../assets/logo/bio.png";
import money from "../../../assets/logo/dollar.png";
import premium from "../../../assets/logo/premium.png";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { Helmet } from "react-helmet-async";

const AdminDashBoard = () => {
  const axiosSecure = useAxiosSecure();

  const { data: allInformation, isLoading: allInfoLoading } = useQuery({
    queryKey: ["allInfo"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/allInformation`);
      return data;
    },
  });

  if (allInfoLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  const chartData = [
    { name: "Total Bio", value: allInformation?.totalBio || 0 },
    { name: "Female", value: allInformation?.female || 0 },
    { name: "Male", value: allInformation?.male || 0 },
    { name: "Premium", value: allInformation?.premium || 0 },
    {
      name: "Revenue",
      value: allInformation?.totalRevenue?.[0]?.totalAmount || 0,
    },
  ];

  const COLORS = ["#FF5733", "#28A745", "#3357FF", "#FF33A8", "#FFC133"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="p-2 md:p-6 lg:p-10">
      <Helmet>
        <title>DashBoard || MatchMate</title>
      </Helmet>
      <h1 className="text-3xl font-semibold text-center mt-4 mb-8">
        Welcome Back!
      </h1>
      {/* card */}
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {/* 1 */}
        <div className="flex items-center py-8 px-2 rounded-md bg-green-200">
          <div className="w-5/12">
            <img src={bioImg} alt="" className="w-20 h-20" />
          </div>
          <div className="w-7/12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-blue-800 font-bold">
              {allInformation?.totalBio}
            </h3>
            <p className="text-xl font-semibold ">Total Bio</p>
          </div>
        </div>
        {/* 2 */}
        <div className="flex items-center py-8 px-2 rounded-md bg-purple-200">
          <div className="w-5/12">
            <img src={women} alt="" className="w-20 h-20" />
          </div>
          <div className="w-7/12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-blue-800 font-bold">
              {allInformation?.female}
            </h3>
            <p className="text-xl font-semibold  ">Female</p>
          </div>
        </div>
        {/* 3 */}
        <div className="flex items-center py-8 px-2 rounded-md bg-red-200">
          <div className="w-5/12">
            <img src={men} alt="" className="w-20 h-20" />
          </div>
          <div className="w-7/12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-blue-800 font-bold">
              {allInformation?.male}
            </h3>
            <p className="text-xl font-semibold ">Male</p>
          </div>
        </div>
        {/* 3 */}
        <div className="flex items-center py-8 px-2 rounded-md bg-blue-200">
          <div className="w-5/12">
            <img src={premium} alt="" className="w-20 h-20" />
          </div>
          <div className="w-7/12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-blue-800 font-bold">
              {allInformation?.premium}
            </h3>
            <p className="text-xl font-semibold ">Premium</p>
          </div>
        </div>

        {/* 5 */}
        <div className="flex items-center py-8 px-2 rounded-md bg-yellow-200">
          <div className="w-5/12">
            <img src={money} alt="" className="w-20 h-20" />
          </div>
          <div className="w-7/12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-blue-800 font-bold">
              {allInformation?.totalRevenue?.[0].totalAmount} $
            </h3>
            <p className="text-xl font-semibold ">Revenue</p>
          </div>
        </div>
      </div>
      {/* chart */}
      <div className="">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart width={400} height={400}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value" 
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]} 
                />
              ))}
            </Pie>
            <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle" 
          />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashBoard;
