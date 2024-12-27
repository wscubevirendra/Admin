import React from 'react'
import { RiDashboard2Fill } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { TbCategoryPlus } from "react-icons/tb";
import { FaProductHunt } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';


export default function SideMenu() {
    const menu = [
        {
            url: "/admin",
            name: "DashBaord",
            icons: <RiDashboard2Fill />
        },
        {
            url: "/admin/category",
            name: "category",
            icons: <BiCategoryAlt />
        },
        {
            url: "/admin/color",
            name: "color",
            icons: <TbCategoryPlus />

        },
        {
            url: "/admin/product",
            name: "product",
            icons: <FaProductHunt />

        }
    ]
    return (
        <div className='h-[100vh] bg-[#111c43]'>
            <div className='w-full text-center border-b border-[#ffffff1a] text-white font-bold text-[30px]'>
                <span className=' text-[#FF4252]'>i</span>SHOP
            </div>
            <ul className='mt-10 flex flex-col gap-6 px-4 text-xl text-white'>
                {
                    menu.map(
                        (d, i) => {
                            return (
                                <Link key={i} to={d.url} className=''>
                                    <li className='flex  mb-6 items-center gap-4'>
                                        {d.icons}
                                        <span className=' duration-500 hover:translate-x-1 '>{d.name}</span>
                                    </li>

                                </Link>

                            )
                        }
                    )
                }
                <li  className='flex cursor-pointer  mb-6 items-center gap-4'>
                    <IoIosLogOut />
                    <span className=' duration-500 hover:translate-x-1 '>Logout</span>
                </li>

            </ul>
           
        </div>
    )
}
