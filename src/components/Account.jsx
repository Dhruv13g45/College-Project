import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Logo from "../assets/Logo.png"
const Account = () => {


    return (
        <>

            <div className=' w-full h-[100vh] bg-gradient-to-tl from-blue-800 to-blue-700 pt-24 px-10'>

                <div className='w-full flex items-start justify-between'>
                    <div className='w-[40%] bg-pink-500'>

                        <div>
                            <img src={Logo} alt="profile-photo" className='w-[200px] h-[200px]' />
                            <h1 className='text-3xl'>Profile Name</h1>
                            <h3 className='text-2xl'>School/College Name</h3>
                        </div>

                        <div className='flex flex-col justify-between gap-5 text-3xl mt-7'>
                            <NavLink to="certificates">Certificates</NavLink>
                            <NavLink to="docs">Documents</NavLink>
                            <NavLink to="matchesPlayed">Matches Played</NavLink>
                        </div>

                    </div>

                    <div className='w-[60%]'>
                        <Outlet />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Account
