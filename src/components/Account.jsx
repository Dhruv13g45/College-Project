import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const Account = () => {
    return (
        <>
            Logged in Account

            <div className='w-1/2 flex justify-around items-center mt-20'>
                <NavLink to="certificates">Certificates</NavLink>
                <NavLink to="docs">Documents</NavLink>
            </div>
            <Outlet />
        </>
    )
}

export default Account
