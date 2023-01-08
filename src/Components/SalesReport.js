import React, { useEffect, useState } from "react";
import { BsArrowDownSquare } from "react-icons/bs";
import { LineChart, YAxis, XAxis, Line, Tooltip, Legend } from "recharts";
import { Graph } from "./Graph";
import { data } from "../data/GraphData";

export const SalesReport = () => {
 
  const [Data, setData] = useState(data);

  const handleMonth = (filterby) => {
    setData(() => {
      return data.slice(-filterby);
    });
  };



  return (
    <div className=" max-w-xs md:max-w-3xl border p-4 ">
      <div className=" flex flex-col md:flex-row justify-between">
        <h3 className="font-semibold text-xl ">Sales Reports</h3>
        <div className="flex flex-col md:flex-row  items-start gap-4">
          <button className="border-2 rounded " onClick={() => handleMonth(12)}>
            12 Months
          </button>
          <button className="border-2 rounded " onClick={() => handleMonth(6)}>
            6 Months
          </button>
          <button className="border-2 rounded " onClick={() => handleMonth(1)}>
            30 Days
          </button>
          <button className="border-2 rounded " onClick={() => handleMonth()}>
            7 Days
          </button>
        </div>
        <div className="flex items-center gap-1 w-24 justify-center border rounded">
          <BsArrowDownSquare />
          <button>Export</button>
        </div>
      </div>
   <div className="hidden md:block">
   <Graph Data={Data} width={730}/>
   </div>
   <div className="block md:hidden ">
   <Graph Data={Data} width={250}/>
   </div>
    </div>
  );
};
