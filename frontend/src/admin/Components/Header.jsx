import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";


export default function Header() {
    return (
        <div className='flex justify-between shadow-md py-2 px-5'>
            <div>
                <div className='flex'>
                    <h1 className=' font-semibold text-[20px]'>Welcome Alex</h1>
                    <img className='w-[30px] ' src="https://admin.pixelstrap.net/riho/assets/images/hand.gif" alt="" />
                </div>
                <p>Here’s what’s happening with your store today.</p>
            </div>
            <div className='flex gap-4 items-center'>

                <img className='w-[40px] h-[40px] rounded-full border shadow' src="https://codeigniter.spruko.com/tailwind/ynex/ynex/assets/images/faces/9.jpg" alt="" />
                <div className='text-left text-md line-clamp-2'>
                    <h4 className=' font-bold text-[#536485]'>John Doe</h4>
                    <p className='text-[536485] mt-[-7px]'>Admin</p>
                </div>
                <IoSettingsOutline className='text-lg animate-spin  duration-2000' />
            </div>
        </div>
    )
}
