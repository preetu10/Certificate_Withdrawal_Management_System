
import Navbar from '@/pages/Navbar/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default Root