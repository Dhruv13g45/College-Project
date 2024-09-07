import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Logo from "../assets/Logo.png"
import "../App.css"
const Account = () => {


    return (
        <>
            <div className=' w-full h-full accountPage pt-24 px-10'>


                <div className='w-full flex justify-between bg-white rounded-3xl items-start gap-10 px-10'>
                    <div className='information w-[30%] flex flex-col gap-5'>
                        <img src={Logo} alt="profile-photo" className='w-[200px] h-[200px]' />
                        <h1 className='text-xl'>Name : Dhruv Goradia</h1>
                        <h3>Gender : Male</h3>
                        <h3>Dob : 13-12-2004</h3>
                        <h3>School/College : S.R.Chandak School</h3>
                        <h3>Aadhar number : 123456789102</h3>
                        <h3>Status: Verified</h3>

                    </div>


                    <div className='w-[70%] flex justify-between items-start gap-10 rounded-3xl'>

                        <div className='w-full flex flex-col justify-between gap-5 text-3xl mt-7'>
                            <div className='w-full flex justify-between items-center'>
                                <NavLink to="certificates">Certificates</NavLink>
                                <NavLink to="docs">Documents</NavLink>
                                <NavLink to="matchesPlayed">Matches Played</NavLink>
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
