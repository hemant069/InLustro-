import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export const SaleBox = ({ data }) => {
   
  return (
    <div className="border  rounded-lg flex-1 bg-white px-5 py-2 my-4">
      <p>{data.day}</p>
      <div className="flex justify-between mt-8">
        <h2 className="text-2xl font-bold">{data.price}</h2>
        <div className="flex items-center">
          <p>+{data.percentage}%</p>
          <AiOutlineArrowUp size={20} color="red" />
        </div>
      </div>
    </div>
  );
};
