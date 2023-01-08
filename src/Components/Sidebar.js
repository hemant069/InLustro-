import React from "react";
import { sidebardata } from "../data/sidebardata";
import { MdOutlineAnalytics, MdOutlineHome, MdOutlineLogout, MdOutlinePerson, MdOutlineSettings } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { AiOutlineFolder,AiOutlinePlus } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import {HiOutlineCursorArrowRays} from 'react-icons/hi2'

export const Sidebar = ({pop}) => {
  return (
    <div  className='w-[300px] md:border h-full p-4  '>
     <div className="">
     <div>
        <div className="flex items-center bg-blue-500 gap-1 h-10 rounded-lg justify-center text-white">
        <AiOutlinePlus/>
        <button onClick={pop}>Connect new Account</button>
        </div>
        <div className="flex items-center py-2 gap-3 cursor-pointer hover:bg-slate-200">
          <MdOutlineHome size={24} />
          <p className="text-[#96969A] font-semibold">Dashboard</p>
        </div>
        <h5 className="text-[#D0D0D5] py-2">Analytics</h5>
        <div className="flex items-center py-2 gap-3 cursor-pointer hover:bg-slate-200">
        <SiSimpleanalytics size={20} />
          <p className="text-[#96969A] font-semibold">Performance</p>
        </div>
        <div className="flex items-center py-2 gap-3 cursor-pointer hover:bg-slate-200">
          <HiOutlineCursorArrowRays size={24} />
          <div className="flex justify-between gap-8">
          <p className="text-[#96969A] font-semibold">Hotjar</p>
          <span className="border border-blue-600  rounded-lg w-12 text-center text-blue-600">NEW</span>
          </div>
        </div>
        <h5 className="text-[#D0D0D5] py-2">Support</h5>
        <div className="flex items-center py-2 gap-3 cursor-pointer hover:bg-slate-200">
          <SiSimpleanalytics size={20} />
          <div className="flex justify-between gap-10">
          <p className="text-[#96969A] font-semibold">Tickets</p>
          <span className="border rounded-lg w-8 text-center text-white bg-gray-600">15</span>
          </div>
        </div>
        <div className="flex items-center py-2 gap-3 cursor-pointer hover:bg-slate-200">
          <MdOutlinePerson size={24} />
          <p className="text-[#96969A] font-semibold">Agents</p>

        </div>
        <div className="flex items-center py-2 gap-3 cursor-pointer hover:bg-slate-200">
          <IoPersonOutline size={24} />
          <p className="text-[#96969A] font-semibold">Customers</p>
          
        </div>
        <h5 className="text-[#D0D0D5] py-2">Shop</h5>
        <div className="flex items-center py-2 gap-3 cursor-pointer hover:bg-slate-200">
          <AiOutlineFolder size={20} />
          <p className="text-[#96969A] font-semibold">Products</p>
        </div>
        <div className="flex items-center py-2 gap-3 cursor-pointer hover:bg-slate-200">
          <BiBell size={24} />
          <p className="text-[#96969A] font-semibold">Orders</p>

        </div>
        <div className="flex items-center py-2 gap-3 cursor-pointer hover:bg-slate-200">
          <MdOutlineAnalytics size={24} />
          <p className="text-[#96969A] font-semibold">Reports</p>
          
        </div>
       
      </div>
      <div className="md:mt-[235px]">
      <div className="flex items-center py-2 gap-3 cursor-pointer hover:bg-slate-200">
          <MdOutlineSettings size={24} />
          <p className="text-[#96969A] font-semibold">Setting</p>
          
        </div>
        <div className="flex items-center py-2 gap-3 cursor-pointer hover:bg-slate-200">
          <MdOutlineLogout size={24} />
          <p className="text-[#96969A] font-semibold">Logout</p>
          
        </div>
      </div>
     </div>
    
    </div>
  );
};
