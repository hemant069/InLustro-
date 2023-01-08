import React from "react";
import { Avtar } from "./Avtar";
import {GrFormNext} from "react-icons/gr"
import { dataRender } from "../data/RecentCustomerData";

export const RecentCustomers = () => {
    
  return (
    <div className="border p-6 rounded-xl mt-3">
      <div>
        <h3 className="font-semibold text-xl">Recent Customers</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      
<div className="overflow-auto">
    
{
        dataRender.map((el,i)=>{
            return (
              
                <div key={i} className="flex gap-3 my-3 items-center ">
                    <div className="">
                        <Avtar url={el.image}/>
                    </div>
                    <div className="w-full min-w-[200px]">
                        <div className="font-medium">{el.name}</div>
                        <div className="text-slate-500">{el.email}</div>
                    </div>
                    <div className=" min-w-[100px]">
                        <div className="font-medium">{el.price}</div>
                        <div className="text-slate-500">{el.city}</div>
                    </div>
                </div>
               
            )
        })
      }
</div>
      <div className="flex items-center uppercase text-xs my-5 text-slate-500">
            See all customers 
            <GrFormNext className="text-base"/>
      </div>
    </div>
  );
};
