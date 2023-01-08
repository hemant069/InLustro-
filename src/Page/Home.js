import React from "react";
import { RecentCustomers } from "../Components/RecentCustomers";

import { SaleBox } from "../Components/SaleBox";
import { SalesReport } from "../Components/SalesReport";
import { Traffic } from "../Components/Traffic";
import { Transactions } from "../Components/Transactions";
import { salesData } from "../data/SalesData";
export const Home = () => {

  return (
    <div className="p-5">
      <div>
        <h3>
          <b>Hey Mariana -</b> here's what's happening with your store today
        </h3>
      </div>
      <div className=" md:flex w-full gap-5">
        {
           salesData.map((el,i)=>{
            return <SaleBox key={i} data={el}/>
           })
        }
        
      </div>
      <div className="flex flex-col md:flex-row w-full gap-8">
        <div>
          <SalesReport />
          <Transactions />
        </div>
        <div className="w-full " >
          <Traffic />
          <RecentCustomers/>
        </div>
      </div>
    </div>
  );
};
