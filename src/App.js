import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Sidebar } from './Components/Sidebar';
import { Home } from './Page/Home';
import { useState } from 'react';
import {MdCancel} from "react-icons/md"


function App() {
  const [bool,setBool]=useState(false)
  const [handlepop,sethandlepop]=useState(false)
  return (
    <div className='relative overflow-hidden'>
      <Navbar click={()=>setBool((val)=>!val)}/>
      <div className='flex  bg-[#FBFBFC] relative' >
        
          <div className='hidden md:block'>
          <Sidebar  pop={()=>sethandlepop((val)=>!val)} />
          </div>
      { bool && <div className='absolute md:hidden right-0 left-0 bg-black z-40'>
        <Sidebar  pop={()=>sethandlepop((val)=>!val)}/>
        </div>}
        <div className='w-full' >
          <Home/>
        </div>
      </div>
     {handlepop && <div className='absolute right-0 left-0 bottom-0 top-0 bg-[rgba(0,0,0,0.8)] z-50'>

    <div className='flex justify-end p-5   '>
      <MdCancel size={35} color="white" onClick={()=>sethandlepop((val)=>!val)}/>

    </div>
    <div className='sidebarHomeContainer w-full flex justify-center items-center p-3'>
    <div className='h-36 w-full max-w-lg bg-red-200 rounded flex justify-center items-center flex-col gap-3'>
    <input type="text" />
    <input type="text" />
    <button>submit</button>
    </div>
    </div>

      </div>}
    </div>
  );
}

export default App;
