import React from 'react'
import {AiOutlineSearch,AiOutlineBell} from 'react-icons/ai'
import { GoMail} from 'react-icons/go'
import {AiOutlineMenu} from 'react-icons/ai'
import { Avtar } from './Avtar'
import logo from '../assert/logo.png'

export const Navbar = ({click}) => {
  return (
    <div className='h-14 bg-white flex justify-between p-2 items-center'>
        <div className='flex items-center'>
            <Avtar url={logo}/>
            <h3 className='font-bold'>ClarityUI</h3>
        </div>
    <div className='block md:hidden' onClick={click}>
        <AiOutlineMenu size={24}/>
    </div>
    <div className='w-full max-w-lg hidden  md:flex  items-center bg-white text-black p-2 border-2 border-solid rounded-lg '>
            <AiOutlineSearch size={'24'}/>
            <input className='w-full bg-transparent border-none outline-none' type="text"  placeholder='Type a search'/>
        </div>
<div className='hidden md:flex'>

        <div className='flex gap-3 items-center'>
            <GoMail size={24}/>
            <AiOutlineBell size={24}/>
           <Avtar url={'https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0='}/>

        </div>
</div>
    </div>
  )
}
