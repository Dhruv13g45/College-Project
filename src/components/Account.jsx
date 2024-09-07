import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Logo from "../assets/Logo.png"
import "../App.css"




const Account = () => {


    return (
        <>
            <div className=' w-full h-[100vh] accountPage pt-24 px-10'>


                <div className='w-full flex justify-between bg-white rounded-3xl items-start gap-10 px-10'>
                    <div className='information w-[30%] flex flex-col gap-5'>
                        <img src={Logo} alt="profile-photo" className='w-[200px] h-[200px]' />
                        <h1 className='text-xl'>Name : Dhruv Goradia</h1>
                        <h1 className='text-xl'>Gender : Male</h1>
                        <h1 className='text-xl'>Dob : 13-12-2004</h1>
                        <h1 className='text-xl'>School/College : S.R.Chandak School</h1>
                        <h1 className='text-xl'>Aadhar number : 123456789102</h1>
                        <h1 className='text-xl'>Status: Verified</h1>

                    </div>


                    <div className='w-[70%] flex justify-between items-start gap-10 rounded-3xl'>

                        <div className='w-full  flex flex-col justify-between gap-5 text-2xl mt-7'>
                            <div className='w-full bg-yellow-500 p-5 rounded-xl flex justify-between items-center'>
                                <NavLink to="certificates" className={({ isActive }) => `${isActive ? "border border-black rounded-3xl hover:no-underline px-5 py-3" : "text-black"} duration-200 ease-in-out`}>Certificates</NavLink>
                                <NavLink to="docs" className={({ isActive }) => `${isActive ? "border border-black rounded-3xl hover:no-underline px-5 py-3" : "text-black"} duration-200 ease-in-out`}>Documents</NavLink>
                                <NavLink to="matchesPlayed" className={({ isActive }) => `${isActive ? "border border-black rounded-3xl hover:no-underline px-5 py-3" : "text-black"} duration-200 ease-in-out`}>Matches Played</NavLink>
                            </div>

                            <div className='w-full items-right'>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </>
    )
}

export default Account
