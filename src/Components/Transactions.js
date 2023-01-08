import React from "react";
import {BsThreeDots} from "react-icons/bs"
import { data } from "../data/TransactionsData";

export const Transactions = () => {
    
  return (
    <div className="border mt-10 p-3 overflow-auto">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-xl ">Transactions</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
        </div>
        <a href="">See All Transactions</a>
      </div>
    <div>
    {data.map((el,i)=>{
        return (
            <div key={i}  className="flex gap-3 my-3 items-center ">
            <div className="min-w-[150px]">
               {el.completed}
            </div>
            <div className="w-full min-w-[200px]  md:max-w-xs">
                <div className="font-medium">{el.card}</div>
                <div className="text-slate-500">{el.payment}</div>
            </div>
            <div className=" min-w-[100px]">
                <div className="font-medium">${el.price}</div>
                <div className="text-slate-500">{el.date}</div>
            </div>
            <div className="min-w-[100px]">
               {el.platfrom}
            </div>
            <div className="">
                <BsThreeDots/>
            </div>
        </div>
        )
    })}
    </div>
    </div>
  );
};
