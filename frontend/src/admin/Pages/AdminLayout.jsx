import React from 'react'
import Header from '../Components/Header'
import SideMenu from '../Components/SideMenu'
import { Outlet } from "react-router-dom"

export default function AdminLayout() {
    return (
        <div className='max-w-[1300px] grid grid-cols-6 h-[100vh] mx-auto border '>
            <div>
                <SideMenu />
            </div>
            <div className=' col-span-5'>
                <Header />
                <div className='p-5'>
                    <Outlet />
                </div>

            </div>
        </div>
    )
}
